import { ReviewsCards, UserImage } from 'components/Cards/CardsByID/CardsByID.styled';
import { selectMovieReviews } from 'components/redux/recipes/selector';
import moment from 'moment';
import randomColor from 'randomcolor';
import { useSelector } from 'react-redux';

function Reviews() {
  const movieReviews = useSelector(selectMovieReviews);
  const results = movieReviews.map(({ results }) => results);

  return (
    <>
      {results &&
        results.map(e =>
          e.map(({ id, author, author_details, content, created_at }) => (
              <ReviewsCards key={`${id}-${author}`}>
                {author_details && (
                  <UserImage
                    style={{
                      backgroundColor: `${randomColor({
                        luminosity: 'dark',
                        count: 1,
                      })}`,
                    }}
                  >
                    {author_details.username.slice(0, 1).toUpperCase()}
                  </UserImage>
                )}
                <p style={{ color: 'black' }}>
                  {content}
                </p>
                <p style={{ color: 'black' }}>
                  {moment(created_at).format('LLLL')}
                </p>
              </ReviewsCards>
            ))
        )}
    </>
  );
};
export default Reviews;
