import { connect } from 'react-redux';
import List from './units';
import { 
    getListToDo,
    handleAddToDo,
} from '../../store/function'; 

export const mapStateToProps = state => {
  return {
    listToDo: state.listToDo,
  }
}
  
export const mapDispatchToProps = dispatch => ({
    getListToDo: (search, filter) => dispatch(getListToDo(search, filter)),
    handleAddToDo: (data) => dispatch(handleAddToDo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);