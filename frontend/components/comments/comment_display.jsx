import React from "react";
import CommentIndexItem from './comment_index_item';
import CommentForm from './comment_form';

class CommentDisplay extends React.Component{
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    this.props.fetchCommentsByAnnotation(this.props.annotation_id);
  }

  componentWillReceiveProps(newProps){
    if(newProps.comments===undefined){
      this.props.fetchCommentsByAnnotation(newProps.annotation_id);
    }else if(newProps.annotation===undefined){
      this.props.fetchAnnotation(parseInt(this.props.annotation_id));
    }
  }

  getOffset(){
    let min = -10;
    if (window.pageYOffset - 400 > min){
      return window.pageYOffset - 400;
    }else{
      return min;
    }
  }


  render(){
    let annotationHolder = (<h3 className="fixed-fragment">Annotation: </h3>);
    if (this.props.annotation){
      annotationHolder = <h3 className="fixed-fragment">Annotation: {this.props.annotation.body}</h3>;
    }

  
    if(this.props.comments && this.props.annotation){
      return(
        <div className="fixed" style={{top: this.getOffset()}}>
          <div className="fixed-content">
            {annotationHolder}
            <h3 className="bottom-line">Comments</h3>
            <ul>
              {this.props.comments.map((comment) => <CommentIndexItem 
              key={comment.id} 
              comment={comment} 
              currentUser={this.props.currentUser}
              deleteComment={this.props.deleteComment}/>)}
            </ul>
          </div>
          <br/>
          <CommentForm
          createComment={this.props.createComment}
          loggedIn={this.props.loggedIn}
          currentUser={this.props.currentUser}
          />
          
        </div>
      );
    }else{
      return(
        <div className="fixed">
          <div className="fixed-content">
            {annotationHolder}
            <h3 className="bottom-line">Comments</h3>
            <ul>
              
            </ul>
          </div>
          <CommentForm />
          <br/>
          
        </div>
      );
    }
    
  }
}

export default CommentDisplay;