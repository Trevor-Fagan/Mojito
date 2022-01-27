import './App.css';
import Dashboard from './pages/Dashboard';
import Sidebar from '../src/components/Sidebar';
import Budget from '../src/pages/Budget';
import Expenses from '../src/pages/Expenses';
import Investments from '../src/pages/Investments';
import TransactionHistory from '../src/pages/TransactionHistory';
import SpendingAnalyzer from '../src/pages/SpendingAnalyzer';
import Account from '../src/pages/Account';
import SignOut from '../src/pages/SignOut';
import Income from '../src/pages/Income';
import SignUp from '../src/pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Sidebar />
        <div className='container w-full'>
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/budget' component={Budget} />
            <Route path='/transaction_history' component={TransactionHistory} />
            <Route path='/expenses' component={Expenses} />
            <Route path='/investments' component={Investments} />
            <Route path='/spending_analyzer' component={SpendingAnalyzer} />
            <Route path='/my_account' component={Account}></Route>
            <Route path='/sign_out' component={SignOut}></Route>
            <Route path='/income' component={Income}></Route>
            <Route path='/sign_up' component={SignUp}></Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
