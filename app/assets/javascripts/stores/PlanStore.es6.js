class PlanStore {
  constructor () {
    this.bindListeners(
      {
        handleFetchLocations: PlanActions.FETCH_LOCATIONS,
      }
    );
  }

  // action handler
  handleFetchLocations (locations) {
    this.setState({ locations: locations });
  }
}
export default alt.createStore(PlanStore, 'PlanStore');
