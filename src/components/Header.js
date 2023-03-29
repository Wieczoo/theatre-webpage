import logo_light from './assets/logo_light.png'
import { Link } from "react-router-dom";

const HeaderMenu = () => {
      return <header><div><img className='leftMenu' src={logo_light}></img></div><div className='middleMenu'>Repertuar</div><div className='rightMenu'><Link to='/login'>Zaloguj</Link></div></header>;
};

export default HeaderMenu; 