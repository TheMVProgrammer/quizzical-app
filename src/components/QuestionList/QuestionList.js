import { v4 as uuidv4 } from 'uuid';
import Question from "../Question/Question";
import dataQuestions from "../../dataQuestions";
import { useEffect, useState } from 'react';

const QuestionList = ({gameOptions, handleGameStart, handleQuestionsNotFound}) => {
  const [questions, setQuestions] = useState([]); //To store questions from api.
  const [buttonCheck, setButtonCheck] = useState(false); //To enable/disable buttonCheck
  const [correctAnswers, setCorrectAnswers] = useState(0); //To count correct answers
  const [gameOver, setGameOver] = useState(false); //It's true when allQuestionsAnswered = true
  
  const allQuestionsAnswered = questions.every(question => question.selectedAnswer !==""); //It's true when all the questions have been answered

  useEffect(() => {
    dataQuestions(gameOptions).then(questions => {
      if(questions.length !== 0) {
        handleQuestionsNotFound(false);
      } else {        
        handleGameStart();
        handleQuestionsNotFound(true);
        return;
      }

      return setQuestions(questions.map(question => {
        return { //Adds 3 new properties into each question object
          ...question,
          id: uuidv4(),
          selectedAnswer: "",
          showAnswer: false
        }
      }));
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let correctAnswers = 0;
    if(allQuestionsAnswered && questions.length !== 0) {
      questions.forEach(question => {
        question.correct_answer === question.selectedAnswer && correctAnswers++;
      });

    setCorrectAnswers(correctAnswers);
    setButtonCheck(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  const handleSelectedAnswer = (questionId, answer) => {
    if (!gameOver) {
      setQuestions(prevQuestions => (
        prevQuestions.map(question => (
          question.id === questionId
          ?
          {...question, selectedAnswer: answer}
          :
          question
        ))
      ));
    }
  }

  const endQuiz = () => {
    if (allQuestionsAnswered) {
      setGameOver(true);

      setQuestions(prevQuestions => (
        prevQuestions.map(question => ({...question, showAnswer: true}))
      ));
    }
  }

  const resetQuiz = () => {
    setButtonCheck(false);
    setGameOver(false);
    handleGameStart();
  }

  const questionElements = questions.map(question => (
    <Question
      key={question.id}
      id={question.id}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswers={question.incorrect_answers}
      difficulty={question.difficulty}
      category={question.category}
      selectedAnswer={question.selectedAnswer}
      showAnswer={question.showAnswer}
      handleSelectedAnswer={handleSelectedAnswer}
    />
  ));

  return (
    <section className='questionList-container'>
      {questionElements}

      <div className="score-container">
        {gameOver &&
          <h3 className="score-text">
            You scored {correctAnswers}/5 correct answers
          </h3>
        }

        <button
          className={`${buttonCheck ? "button-check" : "button-check-disabled"}`}
          onClick={gameOver ? resetQuiz : endQuiz}
        >
          {gameOver ? "Play again" : "Check answers"}
        </button>
      </div>
    </section>
  )
}

export default QuestionList;