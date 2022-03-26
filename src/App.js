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
  return (
    <div className="App">
      <MoleContainer />      
    </div>
  );
}

export default App;
