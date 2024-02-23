import styles from './Button.module.css'
import PropTypes from 'prop-types'; // Import PropTypes

const Button = ({isOutline, icon, text}) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
      
    </button>
  )
}
Button.propTypes = {
    icon: PropTypes.element.isRequired, // Validate icon prop as an element and make it required
    text: PropTypes.string.isRequired, // Validate text prop as a string and make it required
    isOutline: PropTypes.bool, // Validate isOutline prop as a boolean (optional)
  }
export default Button
