import logo from './logo.svg';
import './App.css';
import './utils/reset.css'
import {datas} from './components/defaultData/DataDefault';
import Header from './components/Header';
import Footer from './components/Footer';
import InputData from './components/Input';
import Chart from './components/Chart';

function App() {
  const defaultData= datas
  return (
    <>
      <Header/>
      <InputData/>
      <Chart/>
      <Footer data={defaultData}/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
      <script src="./Assets/js/sintaxyFormat.js"></script>
    </>
  );
}

export default App;
