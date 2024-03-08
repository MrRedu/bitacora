import { Section } from './components/section/Section'
import { Accordion } from './components/accordion/Accordion'

export const App = () => {
  return (
    <>
      <h1>{`</App>`}</h1>
      <Section>
        <Accordion />
      </Section>

      <Section isSecondary>
        <h2>{`</Section>`}</h2>
      </Section>
    </>
  )
}
