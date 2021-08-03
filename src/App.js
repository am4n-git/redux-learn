import logo from './logo.svg';
import './App.css';
import User from './user'
function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <User data={{name:'aman', age:22}}/>
    </div>
  );
}

export default App;
