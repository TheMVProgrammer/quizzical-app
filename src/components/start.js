import UpBlob from "../img/up-blob.svg"
import DownBlob from "../img/down-blob.svg"

export default function Start() {
  return (
    <div className="start-container">
        <img src={UpBlob} alt="upper blob" className="up-blob blob"/>
        <h1 className="start-title">Quizzical</h1>
        <p className="start-desc">Quizzical combines fun and learning. Your general knowledge will be tested regarding a variety of categories. Enjoy!</p>
        <button className="button-start">Start quiz</button>
        <img src={DownBlob} alt="lower blob" className="down-blob blob"/>
    </div>
  )
}