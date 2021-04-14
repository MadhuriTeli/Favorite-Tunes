import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import './App.css';
import Data from './data';

function App() {
  return (
    <div className="row">
      <Sidebar className="col-md-3" />
      <Header className="col-md-9"/>
      
      <Data />
    </div>
  );
}

export default App;
