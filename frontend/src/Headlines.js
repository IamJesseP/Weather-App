/* eslint-disable react/prop-types */
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSnapCarousel } from 'react-snap-carousel';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css';

export default function Headlines({ newsData }) {
  const { scrollRef } = useSnapCarousel();
  return (
    <div className="news-section">
      <h1 className="news-title">News</h1>
      <div className="headlines">
        <ul
          ref={scrollRef}
          style={{
            display: 'flex',
            overflow: 'auto',
            scrollSnapType: 'x mandatory'
          }}>
          {newsData.newsData.articles.slice(0, 10).map((article, index) => (
            <li
              key={index}
              style={{
                fontSize: '50px',
                width: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'top',
                alignItems: 'top'
              }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt="" height="140" image={article.urlToImage} />
                <CardContent className="card-body">
                  <Typography
                    className="article-title"
                    gutterBottom
                    color="text.secondary"
                    component="div"
                    style={{ fontSize: '18px', fontFamily: 'Montserrat, sans-serif' }}>
                    {article.title}
                  </Typography>
                  <Typography
                    className="article-description"
                    variant="body2"
                    color="text.secondary"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    target="blank"
                    href={article.url}
                    rel="noopener noreferrer"
                    style={{ fontFamily: 'Montserrat, sans-serif', color: '#0079D5' }}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
