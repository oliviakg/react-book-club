import React from 'react';
import CommentsSection from '../comments-section';

const NewsTextBase = ({text, comments}) => 
<div>
    <div>{text}</div>
    <CommentsSection comments={comments}/>
</div>

const NewsText = (props) => 
    <NewsTextBase {...props}/>

export default NewsText;
