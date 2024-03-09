import { Section } from './components/section/Section'
import { Accordion } from './components/accordion/Accordion'
import { Slider } from './components/slider/Slider'
import { ScrollToTop } from './components/scroll-to-top/ScrollToTop'

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

      {/* Don't need section component */}
      <Slider />

      {/* Absolute position */}
      <ScrollToTop />
    </>
  )
}
