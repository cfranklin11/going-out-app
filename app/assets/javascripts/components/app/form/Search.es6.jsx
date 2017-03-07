class Search extends React.Component {

  render () {
    return (
        <input name="search" type="text" className="form-control"
          placeholder={this.props.placeholder} required autoFocus/>
    );
  }
}
Search.propTypes = {
  placeholder: React.PropTypes.string,
};
