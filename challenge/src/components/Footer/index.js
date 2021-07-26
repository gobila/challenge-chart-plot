import { useState } from 'react';
import '../../App.css';
import './index.css';
// import './he.scss';


function Footer(props,) {
  let a = props.data

  const [teste, setTeste]= useState(a)

  return (
    <footer className="footer">
        <button className="footerButton" onClick={()=>{
          setTeste(props.data)
          console.log(teste)
        }}> Genarator Chart</button>
    </footer>
    

  );
}

export default Footer;
