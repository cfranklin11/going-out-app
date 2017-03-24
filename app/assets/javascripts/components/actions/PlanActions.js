import alt from '../alt';

class PlanActions {
  fetchLocations (query) {
  return (dispatch) => {
    $.get({
       url: '/plan/locations',
      credentials: 'same-origin',
      data: {
        location_query: query,
      },
    }, (data) => {
       dispatch(data);
    });
  };
}
}
export default alt.createActions(PlanActions);
