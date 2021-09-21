import Calculator from './components/Calculator';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center border border-dark">
          <div className="col-10 border border-dark">
            <Calculator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
