// import Breadcrumbs from './app/form/Breadcrumbs';
// import Main from './app/Main';
import HelloWorld from './HelloWorld.es6.jsx';
class App extends React.Component {
  constructor () {
    super();
    // this.state = {
    //   auth: false,
    //   loading: false,
    //   user: 'melissa',
    // };
  }

  render () {
    return (
      <div id="main-container">
        // <Breadcrumbs />
        // <Main />
        <HelloWorld />
      </div>
    );
  }
}
