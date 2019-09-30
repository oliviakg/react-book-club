import React from 'react';

// const Comment = (props) => {
//     return <div><span>{props.text}</span><span>- {props.user.firstName} {props.user.lastName}</span>
//     </div>
// };

const CommentBase = (props) => {
    return (<li>
        <span>{props.text}</span>
        <span>{`- ${props.user.firstName} ${props.user.lastName}`}</span>
    </li>);
}

const Comment = (props) => {

    return <CommentBase {...props}/>;
}



export default Comment;
