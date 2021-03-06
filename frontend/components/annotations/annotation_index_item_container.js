import AnnotationIndexItem from './annotation_index_item';
import {connect} from "react-redux";
import {fetchVotesByAnnotation, createVote, updateVote, deleteVote} from '../../actions/vote_actions';
import {withRouter} from "react-router-dom";
import { deleteAnnotation } from '../../actions/annotation_actions';

//Create the js object

const mapStateToProps = (state, ownProps) => {
  
  let votes = [];
  let total = 0; 
  if (ownProps.annotation && state.votes[ownProps.annotation.id]){
    votes = state.votes[ownProps.annotation.id].votes;
    total = state.votes[ownProps.annotation.id].total;
  }
  return {
    annotation: ownProps.annotation,
    currentUser: state.session.currentUser,
    votes: votes,
    total: total,
    songId: ownProps.songId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchVotesByAnnotation: (id) => dispatch(fetchVotesByAnnotation(id)),
    createVote: (vote) => dispatch(createVote(vote)),
    updateVote: (id) => dispatch(updateVote(id)),
    deleteVote: (id) => dispatch(deleteVote(id)),
    deleteAnnotation: (id) => dispatch(deleteAnnotation(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnotationIndexItem));