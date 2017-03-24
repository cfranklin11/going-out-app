// class myClass {
//   fetchLocations (name) {
//     console.log(name, 'fetching..fetching..fetching..');
//   }
// }
//
// export default myClass;

const myClass = {
  fetchLocations: function (name) {
    console.log(name, 'fetching..fetching..fetching..');
  },
};
module.exports = {
  myClass: myClass,
};
