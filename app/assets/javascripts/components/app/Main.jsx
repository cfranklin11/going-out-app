class Main extends React.Component {
  render () {
  console.log(React.Children.count());
    return (
      <div>
        <TopNav />
        <div id="content">
          <PlanContainer />
     
        </div>
        <Footer />
      </div>
    );
  }

}
