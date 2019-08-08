import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './styled'

const Button = ({ 
  label,
  onClick,
  name,
}) => (
  <ButtonStyled onClick={onClick} name={name}>
    {label}
  </ButtonStyled>
)

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
}

Button.defaultProps = {
  label: 'Click me',
  onClick: null,
  name: 'buttonName',
}

export default Button