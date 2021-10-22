import './App.css';
import 'antd/dist/antd.css';
import TableSection from './components/TableSection/TableSection';
import NavBar from './components/NavBar/navBar';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <TableSection />
    </div>
  );
}

export default App;
