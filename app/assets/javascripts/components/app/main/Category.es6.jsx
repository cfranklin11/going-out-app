class Category extends React.Component {

  selectSuburb () {
    this.props.selectSuburb(this.props.value);
  }

  render () {
    return (
      <div className="category--item" onClick={this.selectSuburb.bind(this)}>
        {this.props.value}
      </div>
    );
  }
}
Category.propTypes = {
  value: React.PropTypes.string,
  selectSuburb: React.PropTypes.func,
};
