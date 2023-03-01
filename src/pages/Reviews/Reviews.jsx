import { Box, Button } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import {
  ReviewsCards,
  TextReviews,
  UserImage,
} from 'components/Cards/CardsByID/CardsByID.styled';
import { selectMovieReviews } from 'components/redux/recipes/selector';
import moment from 'moment';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function Review({ review }) {
  const [hidden, setHidden] = useState(true);
  const { id, author, author_details, content, created_at } = review;

  const handleToggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <ReviewsCards
      style={{ gap: '20px', marginTop: '20px', alignItems: 'flex-start' }}
      key={`${id}-${author}`}
    >
      <Box sx={{ display: 'flex', gap: '15px' }}>
        {author_details && (
          <UserImage>
            <p
              style={{
                width: '50px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {author_details.username.slice(0, 1).toUpperCase()}
            </p>
          </UserImage>
        )}
        {hidden ? (
          <TextReviews>{content.slice(0, 600)}</TextReviews>
        ) : (
          <TextReviews>{content}</TextReviews>
        )}
      </Box>
      <Box sx={{ display: 'flex', gap: '15px' }}>
        {' '}
        <p style={{ color: 'black', margin: 0 }}>
          {moment(created_at).format('LLLL')}
        </p>
        <Button
          size="small"
          variant="contained"
          style={{ fontSize: '16px', fontWeight: '100', height: '37px' }}
          onClick={handleToggleHidden}
        >
          {hidden ? 'Show' : 'Hide'}
        </Button>
      </Box>
    </ReviewsCards>
  );
}

function Reviews() {
  const { id } = useParams();
  const movieReviews = useSelector(selectMovieReviews);
  const results = movieReviews.map(({ results }) => results);

  return (
    <>
      <div
        style={{
          width: 1200,
          textAlign: 'center',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <Button component={Link} to={`/movie/${id}`} variant="outlined">
          Return to the movie page
        </Button>
        {results &&
          results.map(e =>
            e.map(review => <Review key={nanoid()} review={review} />)
          )}
      </div>
    </>
  );
}

export default Reviews;
