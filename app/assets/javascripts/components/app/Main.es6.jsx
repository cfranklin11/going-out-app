class Main extends React.Component {
  constructor () {
    super();
    const INITIAL_STEP = 'whereStep';
    this.state = { step: INITIAL_STEP };
  }
  renderWhereStep () {
    return (<WhereContainer />);
  }
  renderWhatStep () {
    return (<WhatContainer />);
  }
  renderHowMuchStep () {
    return (<HowMuchContainer />);
  }

  render () {
    const step = this.state.step;
    return (
      <div>
      <p>hello, {this.props.user}!</p>
      { step === 'whereStep' && this.renderWhereStep() }
      { step === 'whatStep' && this.renderWhatStep() }
      { step === 'howMuchStep' && this.renderHowMuchStep() }
      </div>
    );
  }
}
Main.propTypes = {
  user: React.PropTypes.string,
};
