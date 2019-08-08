import { connect } from 'react-redux';
import Preview from './units';
import { 
  handleDetailToDo,
  handleUpdateToDo,
} from '../../../../../../store/function'; 

export const mapStateToProps = state => {
  return {
    detailToDo: state.detailToDo,
  }
}
  
export const mapDispatchToProps = dispatch => ({
  handleDetailToDo: (id) => dispatch(handleDetailToDo(id)),
  handleUpdateToDo: (data) => dispatch(handleUpdateToDo(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Preview);