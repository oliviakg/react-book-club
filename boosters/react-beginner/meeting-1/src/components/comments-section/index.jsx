import Comment from "../comment";
import React from "react";
import { makeTextComments } from "./utils";


const CommentsSectionBase = ({ commentItems, textComments }) => 
<div>
    <div>{textComments}</div>
    <ul>{commentItems}</ul>
</div>


const CommentsSection = ({ comments }) => {
    // keys only make sense on the surrounding array
    // keep key on Comment component rather than on the <li> element in the 
    // Comment component itself
    const baseProps = {
        commentItems : comments.map((comment) =>
        <Comment key={comment.id} {...comment} />
        ),
        textComments: makeTextComments({ comments })
    }
    return <CommentsSectionBase {...baseProps}/>
};

export default CommentsSection;
