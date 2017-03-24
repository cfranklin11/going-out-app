import PlanStore from '../stores/PlanStore';
import PlanActions from '../actions/PlanActions';

import WhereContainer from './main/WhereContainer';
import WhatContainer from './main/WhatContainer';
import HowMuchContainer from './main/HowMuchContainer';

class Main extends React.Component {
  constructor () {
    super();
    // const _INITIAL_STEP = 'whereStep';
    // this.state = { step: _INITIAL_STEP };

    //  get initial state:
    this.state = PlanStore.getState();

    //  callback that handles the PlanStore state changes
    this._handlePlanStoreChange = (state) => {
      this.setState(state);
    };
  }

  componentWillMount () {
    PlanStore.listen(this._handlePlanStoreChange);
  }

  componentWillUnmount () {
    PlanStore.unlisten(this._handlePlanStoreChange);
  }

  handleFetchLocations (query) {
    PlanActions.fetchLocations(query);
  }

  renderWhereStep () {
    return (<WhereContainer handleFetchLocations={this.handleFetchLocations}
      locations={this.state.locations} flag='true' />);
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
        { step === 'WhatStep' && this.renderWhatStep() }
        { step === 'HowMuchStep' && this.renderHowMuchStep() }
      </div>
    );
  }
}
export default Main;
