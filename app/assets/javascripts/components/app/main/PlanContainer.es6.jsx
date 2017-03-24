class PlanContainer extends React.Component {
  selectSuburb (value) {
    console.log('selectSuburb called by the child with value:', value);
  }

  render () {
    const childrenWithProps = React.Children.map(this.props.children,
    (child) => {
      if (child.type.name === 'Category') {
        return (React.cloneElement(child, { selectSuburb: this.selectSuburb }));
      } else {
        return child;
      }
    });
    const planContainerClass =
      'plan-container plan-container--border plan-container--border-' +
      this.props.color;

    return (
      <div className={planContainerClass}>
        <h5>{this.props.title}</h5>
        {childrenWithProps}
      </div>);
  }
}
PlanContainer.propTypes = {
  color: React.PropTypes.string,
  title: React.PropTypes.string,
};
export default PlanContainer;
