import React from 'react';
import NewsItem from '../news-item';

export const text = {
  news: "News"
};

const App = ({newsItems}) => (
  <div>
    { newsItems.map((newsItem) => 
      <NewsItem key={newsItem.id} {...newsItem}/>
    )}
  </div>
);

export default App;
