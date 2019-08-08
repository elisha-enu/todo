import { connect } from 'react-redux';
import Modals from './units';

export const mapStateToProps = state => {
  return {
    isModalShow: state.isModalShow,
    modalType: state.modalType,
  }
}
  
export const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Modals);