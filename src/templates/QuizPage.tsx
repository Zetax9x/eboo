import type { QuizMap } from '../book/types'
import { Rich } from '../components/Box'
import { Icon } from '../components/icons'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

export function QuizPage({ map }: { map: QuizMap }) {
  return (
    <div className="row row-2 grow quiz">
      {map.questions.map((question, i) => (
        <section className="quiz__card" key={question.q}>
          <div className="quiz__q">
            <span className="step__num">{i + 1}</span>
            <Rich text={question.q} />
          </div>
          <ul className="quiz__options">
            {question.options.map((option, j) => (
              <li key={option} className={j === question.answer ? 'is-correct' : ''}>
                <span className="quiz__letter">{LETTERS[j]}</span>
                <Rich text={option} />
                {j === question.answer && <Icon name="CircleCheck" size={14} className="mark-ok" />}
              </li>
            ))}
          </ul>
          <div className="quiz__why">
            <Icon name="Lightbulb" size={13} />
            <Rich text={question.why} />
          </div>
        </section>
      ))}
    </div>
  )
}
