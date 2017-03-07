class WhereContainer extends React.Component {

  render () {
    return (
    <PlanContainer title="Where" color="blue">
        <Search placeholder="Enter an address"/>
        <div className="categories">
          <Category value="South Yarra"/>
          <Category value="Richmond"/>
          <Category value="South Melbourne"/>
          <Category value="South Bank"/>
        </div>
    </PlanContainer>
  );
  }
}
