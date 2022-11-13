/* eslint-disable no-lone-blocks */
import UpBlob from "../img/up-blob.svg";
import DownBlob2 from "../img/down-blob-2.svg";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import createMarkup from 'create-markup'; //Some questions from the api have name codes and decimal codes instead of the string

export default function Questions() {

    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results));
    }, []);
    const allQuestions = questions.map(item => {
        return (
            <Question
            key = {uuidv4()}
            question = {item.question}
            correctAnswer = {item.correct_answer}
            incorrectAnswers = {item.incorrect_answers}
        />
        )
    })

  return (
    <div className="questions">
        <img src={UpBlob} alt="upper blob" className="up-blob blob"/>
        {allQuestions}   
        <button className="button-check">Check answers</button>         
        <img src={DownBlob2} alt="lower blob" className="down-blob blob"/>
    </div>
  )
}

function Question(props) {
    const allAnswers = props.incorrectAnswers.map(answer => {
        return (
            <div key={uuidv4()} className="answer" dangerouslySetInnerHTML={createMarkup(answer)} />
        )
    });

    //Random number between 0 - 2
    const correctAnswerIndexPosition = Math.floor(Math.random() * 3) 
    
    //Inserting correct answer at random index position
    allAnswers.splice(correctAnswerIndexPosition, 0, <div key={uuidv4()} className="answer selected" dangerouslySetInnerHTML={createMarkup(props.correctAnswer)}/>)


    return (
        <div className="question-container">
            <h2 className="question" dangerouslySetInnerHTML={createMarkup(props.question)}/>
            <div className="options">
                {allAnswers}
            </div>
        </div>
        
    )    
}

{/* <div className="question-container">
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
        <button className="button-check">Check answers</button>  */}