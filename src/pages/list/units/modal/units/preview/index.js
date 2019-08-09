import { connect } from 'react-redux';
import Preview from './units';
import { 
  handleDetailToDo,
  handleUpdateToDo,
  handleShowHideModal,
} from '../../../../../../store/function'; 

export const mapStateToProps = state => {
  return {
    detailToDo: state.detailToDo,
    modalType: state.modalType,
    dataId: state.dataId,
    isLoading: state.isLoading,
  }
}
  
export const mapDispatchToProps = dispatch => ({
  handleDetailToDo: (id) => dispatch(handleDetailToDo(id)),
  handleUpdateToDo: (data) => dispatch(handleUpdateToDo(data)),
  handleShowHideModal: (isShow, modalType, dataId) => dispatch(handleShowHideModal(isShow, modalType, dataId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Preview);