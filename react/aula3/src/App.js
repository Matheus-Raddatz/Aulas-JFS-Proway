import './App.css';
import AppContext from './appContext';
import Comp from './pages/Comp';
import Comp3 from './pages/Comp3';


function App() {
  return (
    <div className="App">
      
       <Comp3
          nome="Maria"
       />

       <Comp />
    </div>
  );
}

export default App;
