class Search extends React.Component {

  handleFetchLocations (event) {
    event.preventDefault();
    const location = document.querySelector(`.form-group__search`);

    if (!(location.value.length > 0)) {
      return false;
    }

    this.props.handleFetchLocations(location.value);
  }

  render () {
    return (
       <div className="form-group">
        <input name="search" type="text" className="form-group__search"
          placeholder={this.props.placeholder} required autoFocus/>
          <button type="submit" className="btn btn--default"
            onClick={this.handleFetchLocations.bind(this)}>Search</button>
        </div>
    );
  }
}
Search.propTypes = {
  placeholder: React.PropTypes.string,
  handleFetchLocations: React.PropTypes.func,
};
export default Search;
