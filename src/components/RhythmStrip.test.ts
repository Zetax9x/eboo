import { describe, expect, test } from 'vitest'
import { RHYTHMS } from '../book/types'
import { rhythmTrace, STRIP } from './RhythmStrip'

const peaks = (samples: number[], threshold: number) =>
  samples.filter((y, i) => y > threshold && y >= (samples[i - 1] ?? -Infinity) && y > (samples[i + 1] ?? -Infinity)).length

describe('rhythm strips', () => {
  test.each(RHYTHMS)('%s stays on the paper with finite values', (rhythm) => {
    const trace = rhythmTrace(rhythm)
    expect(trace.every(Number.isFinite)).toBe(true)
    expect(Math.max(...trace)).toBeLessThan(STRIP.baseline)
    expect(Math.min(...trace)).toBeGreaterThan(STRIP.baseline - STRIP.h)
  })

  test('heart rate is reflected in the number of R waves', () => {
    expect(peaks(rhythmTrace('sinus-brady'), 8)).toBe(4) // ~45 bpm on a 4.8 s strip
    expect(peaks(rhythmTrace('sinus'), 8)).toBe(6) // 75 bpm
    expect(peaks(rhythmTrace('sinus-tachy'), 8)).toBe(10) // 125 bpm
  })

  test('asystole and VF have no QRS spikes', () => {
    expect(peaks(rhythmTrace('asystole'), 8)).toBe(0)
    expect(peaks(rhythmTrace('vf'), 8)).toBe(0)
  })
})
