import { useState } from 'react'

import moleImage from './assets/images/mole.png'
import moleHillImage from './assets/images/molehill.png'

function Mole() {
  return <img src={moleImage} alt="Mole" />
}

function MoleHill() {
  return <img src={moleHillImage} alt="Mole Hill" />
}

function MoleContainer() {

  return (
    <>
      <Mole />
      <MoleHill />
    </>
  )
}

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <MoleContainer />      
    </div>
  );
}

export default App;
