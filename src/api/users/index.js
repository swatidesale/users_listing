import users from './users.json'

// module.exports = {
//   get: function() {
//     return fetch(
//       `https://jsonplaceholder.typicode.com/users`
//     )
//       .then(response => {
//         if(response.status == 200) {
//           return response.json()
//         }
//       })
//       .catch((err) => {
//         throw new Error(`Fetching quiz data failed ${err}`);
//       });

//     return users
//   },
// }

export default users