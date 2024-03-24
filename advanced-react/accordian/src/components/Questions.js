import Question from "./Question";

const Questions = ({questions}) =>{
    return(
        <div className="questionCont">
    {
        questions.map((question) => {
            return <Question key={question.id} {...question}/>
    })
    }
      </div>
)}

export default Questions;