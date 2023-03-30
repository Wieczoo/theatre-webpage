import { Link } from "react-router-dom";
import MoviePage from '../pages/MoviePage';
function Button  (props) {
      return <div className='more-btn ' className={props.className}><Link to={props.linkTo}>{props.name}</Link></div>;
};

export default Button; 