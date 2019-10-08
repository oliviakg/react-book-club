import React, { Fragment } from 'react';
import CommentsSection from '../comments-section';

const NewsVideo = ({ videoUrl, title, comments }) => (
    <Fragment>
        <iframe src={videoUrl} title={title} />
        <CommentsSection comments={comments} />
    </Fragment>
);

export default NewsVideo;
