import React from 'react'
import PropTypes from 'prop-types'
import { InputStyled } from './styled'

const Input = ({ 
  placeholder,
  onChange,
  value,
  type,
}) => {
  return (
    <InputStyled 
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      type={type}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.oneOf(['text', 'password','number']),
}

Input.defaultProps = {
    placeholder: 'Type something here',
    onChange: () => {},
    value: '',
    type: 'text',
}


export default Input