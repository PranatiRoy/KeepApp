import './App.css';

import Homepage from './components/Homepage';
import AddText from './context/AddText';
import PopUpContent from './components/popup/PopUpContent';
import PopUpNote from './components/popup/PopUpNote';

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
