import logo from './logo.svg';
import './App.css';
import Welcome from "./components/welcome"
import Greet from "./components/greet"
import Message from "./components/message"
import Counter from "./components/counter"
import Update from './components/update';
import ChangeName from './components/color';
function App() {
  return (
    <div className="App">
     {/*<Welcome name ="Mirudhula" age = "12"> 
     <p>Mirudhula is a good girl</p>
     </Welcome>
    <Welcome name ="Sri" age = "10" /> 
     <Greet name ="Mirudhula" age = "12" />
    <Greet name ="Sri" age ="10"><p> Hi baby</p></Greet>
      <Greet name ="Mirudhula" age = "12" />
      <Message />
  <Counter message ="Hello" />*/}
  <Update />
      <ChangeName />
    </div>
  );
}

export default App;
