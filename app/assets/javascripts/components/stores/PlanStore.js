import alt from '../alt';
import PlanActions from '../actions/PlanActions.js';
class PlanStore {
  constructor () {
    this.bindListeners(
      {
        handleFetchLocations: PlanActions.FETCH_LOCATIONS,
      }
    );
  }

  // action handler
  handleFetchLocations (data) {
    this.setState({ locations: data });
  }
}
export default alt.createStore(PlanStore, 'PlanStore');
