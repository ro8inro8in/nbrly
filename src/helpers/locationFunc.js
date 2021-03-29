// const locationFunc = () => {
//   if (navigator.geolocation) {
//     navigator.permissions
//       .query({ name: "geolocation" })
//       .then(function (result) {
//         if (result.state === "granted") {
//           console.log(result.state);
//           navigator.geolocation.getCurrentPosition((position) => {
//             console.log(position.coords.latitude);
//             return {
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             };
//           });
//         } else if (result.state === "prompt") {
//           console.log(result.state);
//           alert(
//             "NBRLY needs your location to work. Please update your browser preferences."
//           );
//         } else if (result.state === "denied") {
//           console.log(result.state);
//           alert(
//             "NBRLY needs your location to work. Please update your browser preferences."
//           );
//         }
//       });
//   } else {
//     alert("Sorry, your browser is not compatible with NBRLY.");
//   }
// };

// export default locationFunc;
