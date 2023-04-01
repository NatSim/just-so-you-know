import "../App.css";
//style sheets
import "./LandingPage.css"
// import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";
//import logo
import justSoYouKnow from "../images/Logo.png"
import { ReactComponent as JustSoYouKnowLogo } from '../images/logo_jsyk.svg';


console.log('logo',justSoYouKnow)

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="App">         
     <div className="main-container"> 
       <JustSoYouKnowLogo alt="just so you know logo"/>
         <h1>Check My Evening</h1>
      <div>
        <input type="text" placeholder="Find a venue"></input>
      <button onClick={()=>navigate("/venue")}>Find a venue</button>
      </div>
      <div className="secondary-container">
        <h1>Report Incident</h1>
        <h2>Experienced something unsafe?</h2>
     <button onClick={()=>navigate("/report")}>Report</button>
      </div>  
    </div>
  </div>

  );
};

export default LandingPage;