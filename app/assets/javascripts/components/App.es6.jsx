class App extends React.Component {
  constructor () {
    super();
    this.state = {
      auth: false,
      loading: false,
      user: 'melissa',
    };
  }

  render () {
    return (
      <div id="main-container">
        <Breadcrumbs />
        <Main user={this.state.user}/>
      </div>
    );
  }
}
