import propTypes from 'prop-types'
import styles from './ItemAccordion.module.css'
export const ItemAccordion = ({ id, question, answer, isOpen, onClick }) => {
  return (
    <li
      key={question}
      className={`${styles.item} ${isOpen === id ? styles['is-open'] : ''}`}
    >
      <button onClick={() => onClick(id)} className={styles.button}>
        <span>{question}</span>
        <span>{isOpen === id ? '-' : '+'}</span>
      </button>
      {isOpen === id && <p className={styles.answer}>{answer}</p>}
    </li>
  )
}
ItemAccordion.propTypes = {
  id: propTypes.string,
  question: propTypes.string,
  answer: propTypes.string,
  isOpen: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  onClick: propTypes.func,
}
