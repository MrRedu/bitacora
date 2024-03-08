import propTypes from 'prop-types'
import styles from './Section.module.css'
export const Section = ({ children, isTheFirst, isSecondary }) => {
  return (
    <section
      className={`
      ${styles.container}
      ${isTheFirst && styles['is-the-first']}
      ${isSecondary && styles['is-secondary']}`}
    >
      {children}
    </section>
  )
}
Section.propTypes = {
  isTheFirst: propTypes.bool,
  isSecondary: propTypes.bool,
  children: propTypes.node,
}
