import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './_components/NavBar';
import Banner from './_components/Banner';
import Skills from './_components/Skills';


function App() {

  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
