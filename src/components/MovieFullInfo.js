import MovieImg from './assets/movieimg.png'
import StarGold from './assets/Star-Gold.svg';
import StarGray from './assets/Star-Gray.svg';
import Button from './Button';

function MovieFullInfo  (props) {
      return <div className="full-info">
            <div className="left-movie-poster">
                <img className='movie-poster' src={MovieImg}></img>
            </div>
            <div className='right-movie-info'>
            <div className='movie-title'><h2 className='Semi-bold-white'>ASTERIKS I OBELIKS: IMPERIUM SMOKA</h2></div>
            <div className='movie-category'>
                <div>Czas trwania: 1.5h</div>
                <div>Czas trwania: 1.5h</div>
                <div>Czas trwania: 1.5h</div>
            </div>
            <div className='movie-rating'>
                <img className='star' src={StarGold}></img>
                <img className='star' src={StarGold}></img>
                <img className='star' src={StarGold}></img>
                <img className='star' src={StarGold}></img>
                <img className='star' src={StarGray}></img>
            </div>
            <div className='movie-description'>
                <p>Jest rok 50 p.n.e. Cesarzowa Chin, w wyniku zamachu stanu przeprowadzonego przez 
zdradzieckiego księcia, zostaje uwięziona. Córka porwanej władczyni – księżniczka Sass-Yi, 
wraz ze swoim wiernym ochroniarzem i fenickim kupcem wyrusza do odległej Galii, aby 
szukać pomocy dla swojego kraju. Tak oto poznaje Asteriksa i Obeliksa – dwóch dzielnych 
bohaterów, którzy nie cofną się przed niczym, aby zaprowadzić ład i porządek wszędzie tam, 
gdzie zapanował chaos i bezprawie… Oraz wszędzie tam, gdzie można przy okazji smacznie 
podjeść. Galowie z wielką chęcią przystają na prośbę księżniczki i wspólnie z jej przyjaciółmi 
oraz odpowiednim zapasem magicznego napoju wyruszają w długą i pełną przygód podróż 
na Daleki Wschód. Jednak oko na to wszystko ma także słynny wróg Asteriksa i 
Obeliksa – Juliusz Cezar, który jest żądny nowych zdobyczy i zbiera potężną armię, 
aby podbić orientalną krainę po drugiej stronie globu.</p>
            </div>
            <Button name="Oceń film"></Button>
            </div>
            </div>;
};

export default MovieFullInfo; 