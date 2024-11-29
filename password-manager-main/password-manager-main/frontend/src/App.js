import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="*" component={() => <h1>404 Not Found</h1>} />
            </Switch>
        </Router>
    );
};

export default App;
