import { v4 as uuidv4 } from 'uuid';
import { decode } from "html-entities";
import Tick from "../../assets/img/tick.png"
import Cross from "../../assets/img/cross.png"

const Question = props => {
    const incorrectAnswersElements = props.incorrectAnswers.map(answer => {
        const incorrectAnswersClassName = `answer 
            ${props.selectedAnswer ===  answer ? "selected" : ""}
            ${(props.showAnswer && props.selectedAnswer === answer) && "incorrect"}
        `;

        return <div
            key={uuidv4()}
            className={incorrectAnswersClassName}
            onClick={() => props.handleSelectedAnswer(props.id, answer)}
        >
            {decode(answer)}
        </div>
    });

    const correctAnswerClassName = `answer 
        ${props.selectedAnswer === props.correctAnswer ? "selected" : ""}
        ${props.showAnswer && "correct"}
    `;

    const correctAnswerElement = 
        (<div
            key={uuidv4()}
            className={correctAnswerClassName}
            onClick={() => props.handleSelectedAnswer(props.id, props.correctAnswer)}
        >
            {decode(props.correctAnswer)}
        </div>)

    const correctAnswerIndexPosition = Math.floor(Math.random() * 3) 
    
    incorrectAnswersElements.splice(correctAnswerIndexPosition, 0, correctAnswerElement);

    const allAnswersElements = incorrectAnswersElements.sort((a, b) => (
        a.props.children.localeCompare(b.props.children)));
    
    
  return (
    <article className="question-container">
        <div>
            <h3 className="question-text">
                { decode(props.question) }
            </h3>
            <div className="answers-row">
                { allAnswersElements }

                {
                props.showAnswer && (
                    props.selectedAnswer === props.correctAnswer
                    ?
                    <img src={Tick} width={35} height={35} alt="correct answer checked" />
                    :
                    <img src={Cross} width={35} height={35} alt="incorrect answer checked" />
                )
            }
            </div>
            
        </div>
    </article>
  )
}

export default Question;
