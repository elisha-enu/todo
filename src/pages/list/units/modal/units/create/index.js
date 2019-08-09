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
    handleShowHideModal: (isShow, modalType) => dispatch(handleShowHideModal(isShow, modalType))
})

export default connect(mapStateToProps, mapDispatchToProps)(Create);