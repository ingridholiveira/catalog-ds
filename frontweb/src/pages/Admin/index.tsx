import { Switch, Route } from 'react-router-dom';
import NavbarAdm from './NavbarAdm';
import './style.css';

const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <NavbarAdm />
        <div className="admin-content">
          <Switch>
            <Route path="/admin/products">
              <h1>Product CRUD</h1>
            </Route>
            <Route path="/admin/categories">
              <h1>Category CRUD</h1>
            </Route>
            <Route path="/admin/users">
              <h1>Users CRUD</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
