import moleImage from './assets/images/mole.png'
import moleHillImage from './assets/images/molehill.png'

function App() {
  return (
    <div className="App">
      <img src={moleImage} alt="Mole" />
      <img src={moleHillImage} alt="Mole Hill" />
    </div>
  );
}

export default App;
