import React from 'react';
import CommentsSection from '../comments-section';

const NewsImage = ({ comments, imageUrl, title }) => (
    <div>
        <img alt={title} src={imageUrl} />
        <CommentsSection comments={comments}/>
    </div>

);


export default NewsImage;
