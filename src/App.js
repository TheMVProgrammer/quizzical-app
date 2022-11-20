import UpBlob from "./assets/img/up-blob.svg";
import DownBlob from "./assets/img/down-blob.svg";

const App = () => {

  return (
      <main className="App">
        <img src={UpBlob} alt="upper blob" className="up-blob blob"/>

        <section className= "start-container">
          <h1 className="start-title">Quizzical</h1>
          <p className="start-desc">Quizzical combines fun and learning. Your general knowledge will be tested regarding a variety of categories. Enjoy!</p>
        
          <div className="quiz-options-container">
            <div className="select-container">
              <label 
                className="custom-label"
                htmlFor="category">Category:</label>
              <select
                className="custom-select"
              >
                <option value="">Any Category</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals &amp; Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="32">Entertainment: Cartoon &amp; Animations</option>
              </select>
            </div>

            <div className="select-container">
              <label 
                className="custom-label"
                htmlFor="difficulty">Difficulty:</label>
              <select
                className="custom-select"
              >
                <option value="">Any difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="select-container">
              <label 
                className="custom-label"
                htmlFor="type">Type of questions:</label>
              <select
                className="custom-select"
              >
                <option value="">Any type</option>
                <option value="multiple">Multiple choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>
          </div>      
         
          <button 
            className="button-start">
            Start quiz
          </button>
            
        </section>
        <img src={DownBlob} alt="lower blob" className="down-blob blob"/>
        
        <footer>
          <small>Coded with <span>❤</span> by Franklin Martinez</small>
        </footer>
      </main>  
  );
}

export default App;
 


