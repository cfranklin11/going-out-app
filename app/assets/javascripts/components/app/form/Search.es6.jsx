class Search extends React.Component {

  handleFetchLocations (event) {
    const location = event.target.value;
    if (location) {
        this.props.handleFetchLocations(location);
    } else {
      console.log('enter a search parameter!');
    }
  }

  render () {
    return (
        <input name="search" type="text" className="form-control"
          placeholder={this.props.placeholder}
          onClick={this.handleFetchLocations.bind(this)} required autoFocus/>
    );
  }
}
Search.propTypes = {
  placeholder: React.PropTypes.string,
  handleFetchLocations: React.PropTypes.func,
};
export default Search;
