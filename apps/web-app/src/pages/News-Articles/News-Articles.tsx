import React from 'react';
import Title from '../../components/shared/Title/Title';
import News from './News';
import './News.scss';

const NewsArticles = () => {
  const latestNews = [
    {
      title: 'Pakistan certainly have bounced back in the game: Conway',
      date: 'Nov 12',
      description:
        'Devon Conway also talked about his experience in the Karachi Test alongside Tom Latham and Kane Williamson',
      image:
        'https://images-cricketcom.imgix.net/news-1672672218434?auto=compress&dpr=2&w=1&h=200',
      imageLabel: 'Image Text',
    },
    {
      title: 'Fantasy: Bank powerful batters, pacers to do the job at Wankhede',
      date: 'Nov 11',
      description:
        'Here are a few tips that could help you create your fantasy XI for the first T20I between India and Sri Lanka in Mumbai',
      image:
        'https://images-cricketcom.imgix.net/news-1672668441680?auto=compress&dpr=2&w=1&h=200',
      imageLabel: 'Image Text',
    },
  ];
  return (
    <React.Fragment>
      <Title>News & Articles</Title>
      {latestNews.map((post) => (
        <News key={post.title} post={post} />
      ))}
    </React.Fragment>
  );
};

export default NewsArticles;
