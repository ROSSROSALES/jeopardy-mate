import Header from './components/Header'
import Grid from './components/Grid'
import './App.css';
import {useState} from 'react'

function App() {
  const [questionEntry, setQuestionEntry] = useState(false)

  const [teamScore, setTeamScore] = useState([
    {
      team_id: 1,
      score: 0
    },
    {
      team_id: 2,
      score: 0
    },
    {
      team_id: 3,
      score: 0
    }

  
  ])


  return (
    <div className="App">
      <Header />

      <Grid />
    </div>
  );
}

export default App;
