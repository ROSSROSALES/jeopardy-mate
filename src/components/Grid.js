import QuestionBlock from './QuestionBlock'
import { useState, useEffect } from 'react'


const Grid = (props) => {
  const [board, setBoard] = useState();
  // TODO add variable to update number of rows wanted by user
  
  const dynamic_board = [];
  let row = [];
  let s = 100;
  // i = row of questions
  // j = number of rows
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      row.push(<QuestionBlock score ={s}/>)
    }
    dynamic_board.push(row)
    row = []
    s += 100
  }
  useEffect(() => {
    setBoard(dynamic_board);
  }, []);

  return (
    <div className = "container question-board">
        {board}
    </div>
  )
}

export default Grid;
