import { connect } from 'react-redux';
import List from './units';
import { 
    getListToDo,
    handleAddToDo,
    handleShowHideModal,
    handleDetailToDo,
    handleSearchKey,
    handleFilter,
} from '../../store/function'; 

export const mapStateToProps = state => {
  return {
    listToDo: state.listToDo,
    isLoading: state.isLoading,
    isError: state.isError,
    isShowModal: state.isShowModal,
    modalTipe: state.modalType,
    filter: state.filter,
    searchKey: state.searchKey,
  }
}
  
export const mapDispatchToProps = dispatch => ({
    getListToDo: (search, filter) => dispatch(getListToDo(search, filter)),
    handleAddToDo: (data) => dispatch(handleAddToDo(data)),
    handleShowHideModal: (isShow, modalType, dataId) => dispatch(handleShowHideModal(isShow, modalType, dataId)),
    handleDetailToDo: (dataId) => dispatch(handleDetailToDo(dataId)),
    handleSearchKey: (searchKey) => dispatch(handleSearchKey(searchKey)),
    handleFilter: (key) => dispatch(handleFilter(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);