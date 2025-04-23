import './App.css';

const changeText = (event)=>{
  console.log(event.target);
  event.target.innerText = event.target.innerText+ " 被點了";
}

function App() {
  const styleArgument = {fontSize: '100px', color: 'red'};
  return (
    <div className="App">
      <h1 style = {styleArgument} onClick = {changeText}>hello CGU!!
      </h1>
    </div>
  );
}

export default App;
