import './App.css';
import { Switch, Route } from 'react-router-dom';
import Products from './screens/ProductsScreen';
import Cart from './screens/CartScreen';
import Header from './components/Header';

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Header />
      <main style={{ height: '88%' }}>
        <Switch>
          <Route path='/' exact>
            <Products />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
