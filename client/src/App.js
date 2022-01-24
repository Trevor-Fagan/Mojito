import './App.css';
import Dashboard from './pages/Dashboard';
import Sidebar from '../src/components/Sidebar';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
