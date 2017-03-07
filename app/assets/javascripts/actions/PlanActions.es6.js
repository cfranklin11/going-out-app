class PlanActions {
  fetchLocations (query) {
    return (dispatch) => {
      $.get({
        url: '/api/restaurants/locations',
        credentials: 'same-origin',
        data: {
          locations: { query: 'melbourne' },
        },
      }, (data) => {
        dispatch(data);
      });
    };
  }
}
export default alt.createActions(PlanActions);
