// import Breadcrumbs from './components/app/form/Breadcrumbs';
// import Main from './components/app/Main';
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
        <Breadcrumbs />
        <Main />
      </div>
    );
  }
}
