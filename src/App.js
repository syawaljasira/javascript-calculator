import Calculator from './components/Calculator';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-10">
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
