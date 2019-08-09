import { connect } from 'react-redux';
import Create from './units';
import { 
    handleAddToDo,
    handleShowHideModal,
} from '../../../../../../store/function'; 

export const mapStateToProps = state => {
  return {
    modalType: state.modalType,
  }
}
  
export const mapDispatchToProps = dispatch => ({
    handleAddToDo: (data) => dispatch(handleAddToDo(data)),
    handleShowHideModal: (isShow, modalType, dataId) => dispatch(handleShowHideModal(isShow, modalType, dataId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Create);