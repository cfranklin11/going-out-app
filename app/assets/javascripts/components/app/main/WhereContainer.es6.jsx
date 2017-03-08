class WhereContainer extends React.Component {

  render () {
    // console.log('this.props.locations', this.props.locations);
    return (
    <PlanContainer title="Where" color="blue">
        <Search placeholder="Enter an address"
          handleFetchLocations={this.props.handleFetchLocations}/>

          <Category value="South Yarra"/>
          <Category value="Richmond"/>
          <Category value="South Melbourne"/>
          <Category value="South Bank"/>

    </PlanContainer>
  );
  }
}
WhereContainer.propTypes = {
  handleFetchLocations: React.PropTypes.func,
};
