class WhereContainer extends React.Component {

  render () {
    return (
    <PlanContainer title="Where" color="blue">
        <Search placeholder="Enter an address"/>
        <div className="SOMETHING">
          <Category value="South Yarra"/>
          <Category value="Richmond"/>
          <Category value="South Melbourne"/>
          <Category value="South Melbourne"/>
        </div>

    </PlanContainer>
  );
  }
}
