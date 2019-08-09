import { connect } from 'react-redux';
import Modals from './units';
import {
  handleShowHideModal
} from '../../../../store/function'

export const mapStateToProps = state => {
  return {
    isModalShow: state.isModalShow,
    modalType: state.modalType,
  }
}
  
export const mapDispatchToProps = dispatch => ({
  handleShowHideModal: (isShow, modalType) => dispatch(handleShowHideModal(isShow, modalType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modals);