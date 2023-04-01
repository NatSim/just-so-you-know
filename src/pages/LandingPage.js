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
        
        <h1 className="image-container"><JustSoYouKnowLogo alt="just so you know logo"/></h1>
       
         <h2 className="heading">Check My Evening</h2>
      <div>
        <input type="text" placeholder="Find a venue"></input>
      <button className="venue-button radius-right" onClick={()=>navigate("/venue")}>Find a venue</button>
      </div>
      <div className="secondary-container">
        <h2 className="heading">Report Incident</h2>
        <p className="text">Experienced something unsafe?</p>
     <button className="report-button" onClick={()=>navigate("/report")} >Report</button>
      </div>  
    </div>
  </div>

  );
};

export default LandingPage;

