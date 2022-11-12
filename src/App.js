import UpBlob from "./img/up-blob.svg";
import DownBlob from "./img/down-blob.svg";
import {useNavigate} from 'react-router-dom';

export default function App() {

   const navigate = useNavigate();

  const navigateToQuestions = () => {
      // 👇️ navigate to /questions
      navigate('/questions');
  };

  return (
      <div className="App">
        <div className= {`start-container`}>
          <img src={UpBlob} alt="upper blob" className="up-blob blob"/>
          <h1 className="start-title">Quizzical</h1>
          <p className="start-desc">Quizzical combines fun and learning. Your general knowledge will be tested regarding a variety of categories. Enjoy!</p>
          <button 
              onClick={navigateToQuestions}
              className="button-start">
              Start quiz
          </button>
          <img src={DownBlob} alt="lower blob" className="down-blob blob"/>
        </div>     
      </div>   
  );
}

 


