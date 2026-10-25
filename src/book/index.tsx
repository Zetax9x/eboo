import { CoverPage } from './cover'
import { TitlePage } from './titlepage'
import { WarningsPage } from './warnings'

export function InitialPages() {
  return (
    <>
      <CoverPage />
      <TitlePage />
      <WarningsPage />
    </>
  )
}
