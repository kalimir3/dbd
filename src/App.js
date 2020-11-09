import './App.css';
import PerkBuild from './Components/PerkBuild';
import PerkList from './Components/PerkList';

function App() {
  return (
    <div className="App">
      <PerkList useTooltips={true}></PerkList>
      <PerkBuild></PerkBuild>
    </div>
  );
}

export default App;
