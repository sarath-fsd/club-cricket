import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Title from '../../components/shared/Title/Title';
import { getNews } from '../../services/news';
import News from './News';
import './News.scss';

const NewsArticles = () => {
  const newsQuery = useQuery({
    queryKey: ['News'],
    queryFn: getNews,
  });

  if (newsQuery.isLoading) return <h1>Loading...</h1>;

  if (newsQuery.isError) return <pre>{JSON.stringify(newsQuery.error)}</pre>;

  return (
    <React.Fragment>
      <Title>News & Articles</Title>
      {newsQuery.data.map((post: any) => (
        <News key={post.title} post={post} />
      ))}
    </React.Fragment>
  );
};

export default NewsArticles;
