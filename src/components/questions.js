import UpBlob from "../img/up-blob.svg"
import DownBlob2 from "../img/down-blob-2.svg"

export default function Questions() {
  return (
    <div className="questions">
        <img src={UpBlob} alt="upper blob" className="up-blob blob"/>
        <div className="question-container">
            <h2 className="question">How would one say goodbye in Spanish?</h2>
            <div className="options">
                <div className="answer answer-1 selected">Adiós</div>
                <div className="answer answer-2">Hola</div>
                <div className="answer answer-3">Au Revoir</div>
                <div className="answer answer-4">Salir</div>
            </div>
        </div>
        <div className="question-container">
            <h2 className="question">Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h2>
            <div className="options">
                <div className="answer answer-1 selected">Cabbage Patch Kids</div>
                <div className="answer answer-2">Transformers</div>
                <div className="answer answer-3">Care Bears</div>
                <div className="answer answer-4">Rubik's Cube</div>
            </div>
        </div>
        <div className="question-container">
            <h2 className="question">What is the hottest planet in our Solar System?</h2>
            <div className="options">
                <div className="answer answer-1">Mercury</div>
                <div className="answer answer-2 selected">Venus</div>
                <div className="answer answer-3">Mars</div>
                <div className="answer answer-4">Saturn</div>
            </div>
        </div>
        <div className="question-container">
            <h2 className="question">In which country was the caesar salad invented?</h2>
            <div className="options">
                <div className="answer answer-1 selected">Italy</div>
                <div className="answer answer-2">Portugal</div>
                <div className="answer answer-3">Mexico</div>
                <div className="answer answer-4">France</div>
            </div>
        </div>
        <div className="question-container">
            <h2 className="question">How Many Hearts Does An Octopus Have?</h2>
            <div className="options">
                <div className="answer answer-1">One</div>
                <div className="answer answer-2">Two</div>
                <div className="answer answer-3 selected">Three</div>
                <div className="answer answer-4">Four</div>
            </div>
        </div>
        <button className="button-check">Check answers</button>
        <img src={DownBlob2} alt="lower blob" className="down-blob blob"/>
    </div>
  )
}
