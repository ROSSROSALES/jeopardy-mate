const QuestionBlock = (props) => {
  return (
    <div className = "question">
      <h3 style = {{cursor: 'pointer'}}> {props.score} </h3>
    </div>
  )
}

export default QuestionBlock
