import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router';
import { fetchMoviesById } from '../../services/API';
import {
  CardContainer,
  ImageContainer,
  Button,
  Image,
  DataContainer,
  DataTitle,
  Description,
  InfoContainer,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetchMoviesById(Number(movieId));
        setDetails(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      {details && (
        <CardContainer>
          <ImageContainer>
            <Button
              // type="button"
              onClick={() => navigate(location?.state?.from ?? '/')}
            >
              Go Back
            </Button>
            <Image src={details.img} alt={details.title} />
          </ImageContainer>
          <DataContainer>
            <DataTitle>
              {details.title} ({details.releaseDate})
            </DataTitle>
            <Description>User score: {details.vote}</Description>
            <DataTitle>Overview</DataTitle>
            <Description>{details.about}</Description>
            <DataTitle>Genres</DataTitle>
            <Description>{details.genre}</Description>
          </DataContainer>
        </CardContainer>
      )}
      <InfoContainer>
        <DataTitle>Additional information</DataTitle>
        <ul>
          <InfoLink to="cast">Cast</InfoLink>
          <InfoLink to="reviews">Reviews</InfoLink>
        </ul>
      </InfoContainer>
      <Outlet />
    </>
  );
};

export default MovieDetails;
