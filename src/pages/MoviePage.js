import '../App.css';
import HeaderMenu from '../components/Header';
import Footer from '../components/Footer';
import MovieInfo from '../components/MovieInfo';
import MovieFullInfo from '../components/MovieFullInfo';
import PlayingTimes from '../components/PlayingTimes';

function MoviePage() {
    return (
      <div className="App">
        <header className="App-header">
          <HeaderMenu></HeaderMenu>
        </header>
        <div className="container">
          <div className='movie-page-info'>
            <div className='movie-full-info'>
              <MovieFullInfo></MovieFullInfo>
            </div>
            <div className='playing-times'>
            <p className='Semi-bold-white'>Najbliższe seanse</p>
              <div className='playing-times-list'>
                <PlayingTimes></PlayingTimes>
                <PlayingTimes></PlayingTimes>
                <PlayingTimes></PlayingTimes>
                <PlayingTimes></PlayingTimes>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
  
  export default MoviePage;