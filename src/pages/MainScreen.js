import './../App.css';
import HeaderMenu from '../components/Header';
import Footer from '../components/Footer';
import FilmIcon from '../components/MovieIcon';
import MovieInfo from '../components/MovieInfo';



function MainScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderMenu></HeaderMenu>
      </header>
      <div className="container">
        <div>
          <p className='Semi-bold-white'>Polecane</p>
          <div className='Recomended-movie-list'>
            <FilmIcon></FilmIcon>
            <FilmIcon></FilmIcon>
            <FilmIcon></FilmIcon>
            <FilmIcon></FilmIcon>
        </div>
        <div className='Playing-now'>
          <p className='Semi-bold-white'>Grane dzisaj</p>
          <div className='Playing-now-list'>
            <MovieInfo></MovieInfo>
            <MovieInfo></MovieInfo>
            <MovieInfo></MovieInfo>
          </div>
          
        </div>
          
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainScreen;
