
import './App.css';
import data from './data/data.json';
// import User from './components/user/Users';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Main data={data}/>
    </>
  );
}

export default App;
