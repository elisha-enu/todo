import { connect } from 'react-redux';
import List from './units';
import { 
    getListToDo,
    handleAddToDo,
    handleShowHideModal,
} from '../../store/function'; 

export const mapStateToProps = state => {
  return {
    listToDo: state.listToDo,
    isLoading: state.isLoading,
    isError: state.isError,
    isShowModal: state.isShowModal,
    modalTipe: state.modalType,
  }
}
  
export const mapDispatchToProps = dispatch => ({
    getListToDo: (search, filter) => dispatch(getListToDo(search, filter)),
    handleAddToDo: (data) => dispatch(handleAddToDo(data)),
    handleShowHideModal: (isShow, modalType) => dispatch(handleShowHideModal(isShow, modalType))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);