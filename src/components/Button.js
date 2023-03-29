import { Link } from "react-router-dom";
import MoviePage from '../pages/MoviePage';
function Button  (props) {
      return <div className='more-btn'><Link to='/movie'>{props.name}</Link></div>;
};

export default Button; 