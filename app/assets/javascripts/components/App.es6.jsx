import HelloWorld from './HelloWorld';
import Main from './app/Main';

class App extends React.Component {
  constructor () {
    super();
    }

  render () {
    return (
      <div style={{ padding: '20px' }}>
        { /* <HelloWorld />*/ }
        <Main />
      </div>
    );
  }
}
export default App;
