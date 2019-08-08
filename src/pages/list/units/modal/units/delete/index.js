import { connect } from 'react-redux';
import Delete from './units';
import { 
  handleDeleteToDo,
} from '../../../../../../store/function'; 

export const mapStateToProps = state => {
  return {
    detailToDo: state.detailToDo,
  }
}
  
export const mapDispatchToProps = dispatch => ({
  handleDeleteToDo: (id) => dispatch(handleDeleteToDo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Delete);