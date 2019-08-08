import { connect } from 'react-redux';
import Login from './units';
import { 
    handleLogin,
    handleRegister,
} from '../../store/function'; 

export const mapStateToProps = state => {
  return {
      name: state.name,
      email: state.email,
      password: state.password,
      isLoading: state.isLoading,
      isError: state.isError,
      errMessage: state.errMessage,
  }
}
  
export const mapDispatchToProps = dispatch => ({
    handleLogin: (data) => dispatch(handleLogin(data)),
    handleRegister: (data) => handleRegister(data),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);