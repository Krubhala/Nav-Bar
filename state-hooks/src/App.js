import './App.css';
import ClassCounter from './component/ClassCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounter from './component/HooksCounter';
import HooksCounterThree from './component/HookCounterThree';
import HookCounterFour from "./component/HookCounterFour"



function App() {
  return (
    <div className="App">
    {// <ClassCounter /> //
    }
    <HookCounter />
    <HookCounterTwo />
    <HooksCounterThree />
    <HookCounterFour />
    </div>
  );
}

export default App;
