import AppHeader from '../AppHeader/AppHeader';
import ToDo from '../ToDo/ToDo';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <ToDo />
      </main>
    </div>
  );
}

export default App;
