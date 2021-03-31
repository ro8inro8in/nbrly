const db = require("../configFirebase");
// import distanceBetweenPoints from "distance-between-geocoordinates";

const currentUser = {
  lat: 53.43785,
  lon: -2.26867,
};
const otherUser = {
  lat: 53.47846,
  lon: -2.2386,
};

const geodist = require("geodist");
const distance = geodist(currentUser, otherUser, { format: true, unit: "mi." });
console.log(distance);

const getMatchedUsers = async (activity) => {
  const usersRef = db.collection("users");
  const matchedUsersDocs = await usersRef
    .where("interests", "array-contains", activity)
    .get();
  let matchedUsers = [];
  matchedUsersDocs.forEach((doc) => {
    matchedUsers.push(doc.data());
  });
  console.log(matchedUsers);
};

//sort matched users from nearest to furthest
// We need to compare a users location with another users location and compare the distance
// create a function for ...
// Store result as new properties on each object
//return results as number on each object.
// math.ceil <= number.()
