import React from 'react';
import NewsText from '../news-text';
import NewsVideo from '../news-video';
import NewsImage from '../news-image';

const NewsItem = ({ text, comments, imageUrl, title, videoUrl, typename }) => (
    <div>
        {typename=== 'NewsText' && <NewsText text={text} comments={comments}/>}
        {typename=== 'NewsImage' && <NewsImage imageUrl={imageUrl} title={title} comments={comments}/>}
        {typename=== 'NewsVideo' && <NewsVideo title={title} videoUrl={videoUrl} comments={comments}/>}
    </div>
);

export default NewsItem;
