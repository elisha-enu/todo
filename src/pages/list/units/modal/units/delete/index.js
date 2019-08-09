import { connect } from 'react-redux';
import Delete from './units';
import { 
  handleDeleteToDo,
  handleShowHideModal
} from '../../../../../../store/function'; 

export const mapStateToProps = state => {
  return {
    detailToDo: state.detailToDo,
    modalType: state.modalType,
    dataId: state.dataId,
  }
}
  
export const mapDispatchToProps = dispatch => ({
  handleDeleteToDo: (id) => dispatch(handleDeleteToDo(id)),
  handleShowHideModal: (isShow, modalType, dataId) => dispatch(handleShowHideModal(isShow, modalType, dataId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete);