import type { TableMap } from '../book/types'
import { Box, Bullets, KeyBand, Rich } from '../components/Box'

export function TablePage({ map }: { map: TableMap }) {
  const totalWidth = map.widths?.reduce((a, b) => a + b, 0)
  return (
    <>
      {map.intro && (
        <div className="intro">
          <Rich text={map.intro} />
        </div>
      )}
      <Box title={map.tableTitle} icon={map.tableIcon} className="box--plain grow">
        <table className="big-table">
          {map.widths && totalWidth && (
            <colgroup>
              {map.widths.map((w, i) => (
                <col key={i} style={{ width: `${(w / totalWidth) * 100}%` }} />
              ))}
            </colgroup>
          )}
          <thead>
            <tr>
              {map.columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {map.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>
                    <Rich text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      {map.notes.length > 0 && (
        <div className="row" style={{ gridTemplateColumns: `repeat(${Math.min(map.notes.length, 3)}, 1fr)` }}>
          {map.notes.map((note) => (
            <Box key={note.title} title={note.title} icon={note.icon} accent={note.accent}>
              <Bullets items={note.items} />
            </Box>
          ))}
        </div>
      )}
      {map.keyPoints && <KeyBand items={map.keyPoints} />}
    </>
  )
}
