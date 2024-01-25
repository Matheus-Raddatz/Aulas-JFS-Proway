import './App.css';
import Comp1 from './pages/Comp1';
import Comp2 from './pages/Comp2';
import Comp3 from './pages/Comp3';

export default function AppSemContext() {
  return (
    <div className="App">
        <h1>Ola</h1>
        <Comp3
           nome="Maria"
        />

       <Comp2
           nome="Pedro"
        />

     <Comp1
           nome="Joana"
      />
      
    </div>
  );
}


