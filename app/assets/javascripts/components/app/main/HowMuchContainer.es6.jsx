import PlanContainer from './PlanContainer';
import Search from '../form/Search';

class HowMuchContainer extends React.Component {

  render () {
    return (
    <PlanContainer title="How Much you want to spend?" color="orange">
      <Search placeholder="I want to spend $..."/>
    </PlanContainer>
  );
  }
}
export default HowMuchContainer;
