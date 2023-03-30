import './../App.css';
import HeaderMenu from '../components/Header';
import Footer from '../components/Footer';
import FilmIcon from '../components/MovieIcon';
import MovieInfo from '../components/MovieInfo';
import InputForm from '../components/InputForm';
import Button from '../components/Button';


function RegisterPage() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderMenu></HeaderMenu>
      </header>
      <div className="container">
        <div className="center-login-form">
        <p className='Semi-bold-white'>Zarejestruj się</p>
        <InputForm className='login-input' placeholder='Adres e-mail'></InputForm>
        <InputForm className='login-input' placeholder='Hasło'></InputForm>
        <Button className='active' name='Zarejestruj się'></Button>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
}

export default RegisterPage;
