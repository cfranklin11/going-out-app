import PlanContainer from './PlanContainer';
import Search from '../form/Search';
import Category from './Category';

class WhereContainer extends React.Component {

  renderCategories (locations) {
    if (locations != undefined) {
      if (locations.location_suggestions.length > 0) {
        return locations.location_suggestions.map((location, index) => (
          <Category key={index}
            value={location.name +' '+location.country_name} />
        ));
      } else return [];
  } else return [];
  }

  render () {
    const categories = this.renderCategories(this.props.locations);
     return (
      <PlanContainer title="Where" color="blue">
        <Search placeholder="Enter an address"
          handleFetchLocations={this.props.handleFetchLocations} />
          { categories }
      </PlanContainer>
    );
  }
}

WhereContainer.propTypes = {
  handleFetchLocations: React.PropTypes.func,
  locations: React.PropTypes.object,
  flag: React.PropTypes.string,
};

export default WhereContainer;
