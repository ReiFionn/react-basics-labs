import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash and Dry dishes after dinner" />
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away" />
      <Task title="Tidy" deadline="Today" description="Clean bathroom and mop floor"/>
      <Task title="Shopping" deadline="Thursday" description="Purchase food and necessities for the coming week"/>
      <Task title="Babysitting" deadline="Saturday" description="Look after Rebecca's daughters from 6pm until 11pm"/>
    </div>
  );
}

export default App;
