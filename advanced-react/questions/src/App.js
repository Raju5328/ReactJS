import data from './data'
import {useState} from 'react'
import './App.css';
import Questions from './Questions'

const App = () => {
  const[questions, setQuestions] = useState(data);

  return (
    <main>
      < Questions questions={questions}/>
    </main>
  );
}

export default App;
