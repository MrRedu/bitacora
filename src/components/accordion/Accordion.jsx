import styles from './Accordion.module.css'
import { ItemAccordion } from './ItemAccordion'
import { useState } from 'react'

export const FAQ = [
  {
    id: '1',
    question: '¿Quién escribió "Don Quijote de la Mancha"?',
    answer:
      '"Don Quijote de la Mancha" fue escrita por Miguel de Cervantes Saavedra, un destacado escritor español del Siglo de Oro. Publicada en dos partes (1605 y 1615), esta obra maestra de la literatura universal narra las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza, explorando temas como la realidad, la locura y el idealismo.',
  },
  {
    id: '2',
    question: '¿Cuál es el río más largo del mundo?',
    answer:
      'El río Amazonas se destaca como el río más largo del mundo, con una longitud aproximada de 7,062 kilómetros. Este imponente río atraviesa Sudamérica, fluyendo a través de países como Brasil, Perú y Colombia, y desemboca en el océano Atlántico. El Amazonas no solo es vital para la biodiversidad amazónica, sino que también desempeña un papel crucial en el equilibrio climático global.',
  },
  {
    id: '3',
    question: '¿Qué año comenzó la Primera Guerra Mundial?',
    answer:
      'La Primera Guerra Mundial estalló en 1914 como resultado de tensiones políticas y territoriales entre las potencias europeas. Este conflicto devastador se prolongó hasta 1918, involucrando a numerosas naciones en combates a gran escala que transformaron el panorama geopolítico mundial y dejaron una profunda huella en la historia contemporánea.',
  },
  {
    id: '4',
    question: '¿Cuál es la montaña más alta del mundo?',
    answer:
      'El Monte Everest se erige como la montaña más alta del mundo, con una altitud impresionante de 8,848 metros sobre el nivel del mar. Situado en el Himalaya entre Nepal y China, el Everest representa un desafío legendario para alpinistas y aventureros que buscan conquistar su cumbre extrema. Esta majestuosa montaña simboliza tanto la grandeza natural como los límites físicos que desafían al ser humano en su búsqueda de exploración y superación personal.',
  },
  {
    id: '5',
    question: '¿Cuál es la fórmula química del agua?',
    answer:
      'La fórmula química del agua es H2O. Esta composición molecular indica que una molécula de agua está formada por dos átomos de hidrógeno y uno de oxígeno. El agua es un recurso vital para todos los seres vivos y desempeña un papel crucial en numerosos procesos biológicos y químicos que sustentan la vida en nuestro planeta.',
  },
  {
    id: '6',
    question: '¿Qué es la fotosíntesis?',
    answer:
      'La fotosíntesis es un proceso vital para la vida en la Tierra, realizado por plantas, algas y algunas bacterias. Consiste en la conversión de la energía lumínica del sol en energía química que se almacena en compuestos orgánicos, como la glucosa. Este proceso es fundamental para la producción de oxígeno y el suministro de alimentos en la cadena alimentaria, siendo uno de los pilares de la sostenibilidad ambiental.',
  },
  {
    id: '7',
    question: '¿Cuántos continentes hay en el mundo?',
    answer:
      'En el mundo existen siete continentes: África, América del Norte, América del Sur, Antártida, Asia, Europa y Oceanía. Cada continente tiene características geográficas únicas y alberga una diversidad impresionante de culturas, idiomas y paisajes. Los continentes desempeñan un papel fundamental en la configuración del planeta Tierra y en la interconexión global que define nuestra realidad actual.',
  },
  {
    id: '8',
    question: '¿Cuál es la capital de Francia?',
    answer:
      'La capital de Francia es París, una ciudad icónica conocida por su rica historia, arte y cultura. París es famosa por monumentos emblemáticos como la Torre Eiffel, el Louvre y la Catedral de Notre Dame. Además de ser un importante centro cultural y turístico, París también es reconocida por su gastronomía excepcional y su elegante estilo de vida.',
  },
]

export const Accordion = () => {
  const [isOpenById, setIsOpenById] = useState(false)

  const handleClick = id => {
    setIsOpenById(prev => (prev === id ? false : id))
  }

  return (
    <ul className={styles.container}>
      {FAQ?.map(({ id, question, answer }) => (
        <ItemAccordion
          key={id}
          id={id}
          question={question}
          answer={answer}
          isOpen={isOpenById}
          onClick={handleClick}
        />
      ))}
    </ul>
  )
}
