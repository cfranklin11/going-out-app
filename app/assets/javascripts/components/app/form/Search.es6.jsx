class Search extends React.Component {
  handleFetchLocations () {
    this.props.handleFetchLocations();
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
