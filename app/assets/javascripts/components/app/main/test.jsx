import PlanContainer from './PlanContainer';
import Search from '../form/Search';
import Category from './Category';

class WhereContainer extends React.Component {

  render () {
    return (<Search placeholder="Enter an address"
      handleFetchLocations={this.props.handleFetchLocations}/>);
    return (
      <div title="Where" color="blue">
        <Search placeholder="Enter an address"
          handleFetchLocations={this.props.handleFetchLocations}/>
          { this.props.categories.map(category => {
            return (
              <Category value={ category } selectSuburb={ this.props.selectSuburb } />
            );
          }) }
       </div>
  );
  }
}

WhereContainer.propTypes = {
  handleFetchLocations: React.PropTypes.func,
  locations: React.PropTypes.object,
  flag: React.PropTypes.string,
  categories: React.PropTypes.array,
  selectSuburb: React.PropTypes.func,
};

export default WhereContainer;
