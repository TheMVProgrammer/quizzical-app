import UpBlob from "../img/up-blob.svg";
import DownBlob2 from "../img/down-blob-2.svg";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import createMarkup from 'create-markup'; //Some questions from the api have name codes and decimal codes instead of the text so I had to replace it with the innerHTML

export default function Questions() {

    const [questions, setQuestions] = useState([]);
    
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data.results));
    }, []);

    const allQuestionsAndAnswers = questions.map(item => {
        return (
            <div key = {uuidv4()} className="question-container">
                <Question                    
                    question = {item.question}/>
                <div className="options">
                    <Answers
                        correctAnswer = {item.correct_answer}
                        incorrectAnswers = {item.incorrect_answers}
                        isHeld = {false}
                    />
                </div>
            </div>            
        )
    })

  return (
    <div className="questions">  
            <img src={UpBlob} alt="upper blob" className="up-blob blob"/>      
            {allQuestionsAndAnswers}
            <button className="button-check">Check answers</button>
            <img src={DownBlob2} alt="lower blob" className="down-blob blob"/>
    </div>
  )
}

function Question(props) {
    return (
        <h2 className="question" dangerouslySetInnerHTML={createMarkup(props.question)}/>
    )
}

function Answers(props) {
    const allAnswers = props.incorrectAnswers.map(answer => {
        return (
            <div key = {uuidv4()} className="answer" dangerouslySetInnerHTML={createMarkup(answer)} />
        )
    });

    //Random number between 0 - 2
    const correctAnswerIndexPosition = Math.floor(Math.random() * 3) 
    
    //Inserting correct answer at random index position
    allAnswers.splice(correctAnswerIndexPosition, 0, <div key = {uuidv4()} className="answer selected" dangerouslySetInnerHTML={createMarkup(props.correctAnswer)}/>)

    return allAnswers;
    
}

