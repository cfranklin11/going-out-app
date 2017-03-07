class Category extends React.Component {

  selectSuburb () {
    this.props.selectSuburb(this.props.value);
  }

  render () {
    return (
      <div onClick={this.selectSuburb.bind(this)}>
        {this.props.value}
      </div>
    );
  }
}
Category.propTypes = {
  value: React.PropTypes.string,
  selectSuburb: React.PropTypes.func,
};
