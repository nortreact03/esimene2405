import './luuletus.css'
import suusataja from './suusataja1.jpg'
import Luuletus from './Luuletus';

function App() {
  return (
    <div className="container">
        <h1>Maailma parim luuletus</h1>
        <Luuletus pilt={suusataja} />
  
    </div>
  );
}

export default App;
