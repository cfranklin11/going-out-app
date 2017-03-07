class Search extends React.Component {

  render () {
    return (
        <input name="search" type="text"
          placeholder={this.props.placeholder} required autoFocus/>
    );
  }
}
Search.propTypes = {
  placeholder: React.PropTypes.string,
};
