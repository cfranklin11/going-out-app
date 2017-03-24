// import PlanContainer from './PlanContainer';
// import Search from '../form/Search';
// import Category from './Category';
//
// class WhereContainer extends React.Component {
//
//   render () {
//     return (<Search placeholder="Enter an address"
//       handleFetchLocations={this.props.handleFetchLocations}/>);
//     return (
//       <div title="Where" color="blue">
//         <Search placeholder="Enter an address"
//           handleFetchLocations={this.props.handleFetchLocations}/>
//           { this.props.categories.map(category => {
//             return (
//               <Category value={ category }
//                  selectSuburb={ this.props.selectSuburb } />
//             );
//           }) }
//        </div>
//   );
//   }
// }
//
// WhereContainer.propTypes = {
//   handleFetchLocations: React.PropTypes.func,
//   locations: React.PropTypes.object,
//   flag: React.PropTypes.string,
//   categories: React.PropTypes.array,
//   selectSuburb: React.PropTypes.func,
// };
//
// export default WhereContainer;

//
// class CardGroup extends Component {
//   render() {
//     return (
//       <div>{this.props.children}</div>
//     )
//   }
// }
//
//
// CardGroup.propTypes = {
//   children: function (props, propName, componentName) {
//     const prop = props[propName]
//
//     let error = null
//     React.Children.forEach(prop, function (child) {
//       if (child.type !== Card) {
// error = new Error('`' + componentName + '` children should be of type `Card`.');
//       }
//     })
//     return error
//   }
// }
