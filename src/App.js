
import './App.css';
import Companies from './components/Companies';
import Date from './components/Date';
import Intro from './components/Intro';
import Line from './components/Line';
import Mentors from './components/Mentors';
import Program from './components/Program';
import Tech from './components/Tech';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <Intro/>
      <Companies/>
      <Line/>
      <Date/>
      <Line/>
      <Tech/>
      <Line/>
      <Mentors/>
      <Line/>
      <Program/>
      <Line/>
    </div>
  );
}

export default App;
