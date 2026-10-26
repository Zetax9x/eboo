// Chat client for local models: OpenAI-compatible servers (vLLM) or Ollama.

const REQUEST_TIMEOUT_MS = 30 * 60 * 1000

/**
 * @param {{ baseUrl?: string, ollamaHost?: string, model: string, contextTokens?: number,
 *           reasoning?: string, temperature?: number, maxTokens?: number }} options
 *   baseUrl: OpenAI-compatible endpoint (e.g. http://localhost:8001/v1); when missing, Ollama is used.
 *   reasoning: 'low' | 'medium' | 'high' for reasoning models, omitted otherwise.
 * @returns {(messages: {role: string, content: string}[]) => Promise<string>}
 */
export function createChat({ baseUrl, ollamaHost = 'http://localhost:11434', model, contextTokens = 32768, reasoning, temperature = 0.1, maxTokens = 8000 }) {
  let sendReasoning = Boolean(reasoning)

  async function openai(messages) {
    const body = { model, messages, temperature, max_tokens: maxTokens }
    if (sendReasoning) body.reasoning_effort = reasoning
    const response = await fetch(`${baseUrl.replace(/\/$/, '')}/chat/completions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.LLM_API_KEY ?? 'none'}` },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!response.ok) {
      const text = await response.text()
      if (sendReasoning && /reasoning/i.test(text)) {
        sendReasoning = false // model without reasoning support: retry without the parameter
        return openai(messages)
      }
      throw new Error(`Server ${response.status}: ${text.slice(0, 300)}`)
    }
    return (await response.json()).choices?.[0]?.message?.content ?? ''
  }

  async function ollama(messages) {
    const body = { model, messages, stream: false, options: { num_ctx: contextTokens, temperature } }
    if (sendReasoning) body.think = reasoning
    const response = await fetch(`${ollamaHost}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
    if (!response.ok) {
      const text = await response.text()
      if (sendReasoning && /think/i.test(text)) {
        sendReasoning = false
        return ollama(messages)
      }
      throw new Error(`Ollama ${response.status}: ${text.slice(0, 300)}`)
    }
    return ((await response.json()).message?.content ?? '').replace(/<think>[\s\S]*?<\/think>/g, '')
  }

  return baseUrl ? openai : ollama
}
