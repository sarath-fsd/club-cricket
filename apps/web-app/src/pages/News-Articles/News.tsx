import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import Title from '../../components/shared/Title/Title';

interface NewsProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function News(props: NewsProps) {
  const { post: news } = props;

  return (
    <Grid item xs={12} md={6} className="news">
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{
              width: 472,
              height: 200,
              backgroundPosition: 'center',
              display: { xs: 'none', sm: 'block' },
            }}
            image={news.image}
            alt={news.imageLabel}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {news.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {news.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {news.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
