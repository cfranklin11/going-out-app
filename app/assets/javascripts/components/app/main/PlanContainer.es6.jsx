class PlanContainer extends React.Component {
  selectSuburb (value) {
    console.log('selectSuburb called by the child with value:', value);
  }

  render () {
    console.log(this.props.color);
    const childrenWithProps = React.Children.map(this.props.children,
    (child) => {
      if (child.type === Category) {
        return (React.cloneElement(child, { selectSuburb: this.selectSuburb }));
      } else {
        return child;
      }
    });

    return (
      <div className=
      {'plan-container plan-container--border plan-container--border-' + this.props.color}>
        <h5>{this.props.title}</h5>
        {childrenWithProps}
      </div>);
  }
}
PlanContainer.propTypes = {
  children: React.PropTypes.array.isRequired,
  color: React.PropTypes.string,
  title: React.PropTypes.string,
};
