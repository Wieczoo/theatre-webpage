import movieIcon from './assets/movieimg.png';
import Button from './Button';

const FilmIcon = () => {
      return <div className='movie-icon-holder'><img className='movie-icon' src={movieIcon}></img><Button name="Więcej"></Button></div>;
};

export default FilmIcon; 