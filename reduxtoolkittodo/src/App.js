import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
     <h1>Learn about Redux toolkit</h1>
     <AddTodo/>
     <Todo/>
    </div>
  );
}

export default App;
