import './App.css';

import Homepage from './components/Homepage';
import AddText from './context/AddText';


function App() {
  return (
    <>
      <AddText>
        <Homepage />
        
      </AddText>
    </>
  );
}

export default App;
