import PlanContainer from './PlanContainer';
import Search from '../form/Search';
import Category from './Category';

class WhereContainer extends React.Component {

  render () {
    return (<Search placeholder="Enter an address"
      handleFetchLocations={this.props.handleFetchLocations}/>);
    /* return (
      <PlanContainer title="Where" color="blue">
        <Search placeholder="Enter an address"
          handleFetchLocations={this.props.handleFetchLocations}/>
          categories.map()
          <Category value="South Yarra"/>
          <Category value="Richmond"/>
          <Category value="South Melbourne"/>
          <Category value="South Bank"/>
       </PlanContainer>
  ); */
  }
}

WhereContainer.propTypes = {
  handleFetchLocations: React.PropTypes.func,
  locations: React.PropTypes.object,
  flag: React.PropTypes.string,
};

export default WhereContainer;
