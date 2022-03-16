import Nav from './components/Nav';
import QuoteGenerator from './components/QuoteGenerator';

function App() {

  return (
    <>
      <Nav/>
      <div className='container d-flex justify-content-center'>
        <QuoteGenerator/>
      </div>
    </>
  );
}

export default App;
