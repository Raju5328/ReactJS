import questions from './components/data';
import './App.css';
import Questions from './components/Questions';

function App() {
  

  return (
    <div className="App">
      <h1>Accordian</h1>
      <section className="container">
      {
        <Questions questions={questions}/>
      //   questions.map((question) => {
      //     const {Id, title, info} = question;
      //     return(
      //       <div key={Id}>
      //         <h3>{title}</h3>
      //         <p>{info}</p>
      //       </div>
      //     )
      //   })
       } 
      </section>
    </div>
  );
}

export default App;
