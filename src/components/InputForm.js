import logo_light from './assets/logo_light.png'
import { Link } from "react-router-dom";

function InputForm(props) {
      return <input class={props.className} type="text" placeholder={props.placeholder} />;
};

export default InputForm; 

