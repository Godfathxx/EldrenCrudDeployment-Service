import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateService from './components/CreateService';
import ServiceList from './components/ServiceList';
import EditService from './components/EditService';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreateService />} />
          <Route path="/create-Service" element={<CreateService />} />
          <Route path="/Service-list" element={<ServiceList />} />
          <Route path="/edit-Service/:id" element={<EditService />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

