// import PlanStore from '../../stores/PlanStore';
// import PlanActions from '../../stores/PlanActions';

class Main extends React.Component {
  constructor () {
    super();
    // const INITIAL_STEP = 'whereStep';

    // this.state = { step: INITIAL_STEP };
    this.state = PlanStore.getState();

    this._handlePlanStoreChange = (state) => {
      this.setState({ state });
    };
  }

  componentWillMount () {
    PlanStore.listen(this._handlePlanStoreChange);
  }

  componentWillUnmount () {
    PlanStore.unlisten(this._handlePlanStoreChange);
  }

  handleFetchLocations () {
    PlanActions.handleFetchLocations();
  }
  renderWhereStep () {
    return (<WhereContainer handleFetchLocations={this.handleFetchLocations}
        locations={this.state.locations} />);
  }
  renderWhatStep () {
    return (<WhatContainer />);
  }
  renderHowMuchStep () {
    return (<HowMuchContainer />);
  }

  render () {
    // const step = this.state.step;
    const step = 'whereStep';
    return (
      <div>
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
