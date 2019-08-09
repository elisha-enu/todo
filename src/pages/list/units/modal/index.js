import { connect } from 'react-redux';
import Modals from './units';
import {
  handleShowHideModal
} from '../../../../store/function'

export const mapStateToProps = state => {
  return {
    isModalShow: state.isModalShow,
    modalType: state.modalType,
    dataId: state.dataId,
  }
}
  
export const mapDispatchToProps = dispatch => ({
  handleShowHideModal: (isShow, modalType, dataId) => dispatch(handleShowHideModal(isShow, modalType, dataId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modals);