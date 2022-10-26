import NavbarAdm from './NavbarAdm';
import './style.css';

const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <NavbarAdm />
        <div className="admin-content">
          <h1>Conteudo</h1>
        </div>
      </div>
    </>
  );
};

export default Admin;
