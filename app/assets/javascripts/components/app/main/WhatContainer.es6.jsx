import PlanContainer from './PlanContainer';
import Search from '../form/Search';
class WhatContainer extends React.Component {

  render () {
    return (
    <PlanContainer title="What" color="green">
     <Search placeholder="I want to eat..."/>
    </PlanContainer>
  );
  }
}
export default WhatContainer;
