import QuestionBlock from './QuestionBlock'
import {useState} from 'react'


const Grid = (props) => {
  const [board, setBoard] = useState([])
  let row = []
  let s = 100
  for (let j = 0; j < 5; j++ ){
    for (let i = 0; i < 5; i++) {
      row.push(<QuestionBlock score ={s}/>)
    }
    board.push(row)
    row = []
    s += 100
  }

  return (
    <div className = "container question-board">
        {board[0]}

        {board[1]}

        {board[2]}

        {board[3]}

        {board[4]}

        
    </div>
  )
}

export default Grid
