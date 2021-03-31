const { db } = require("../configFirebase");
// import distanceBetweenPoints from "distance-between-geocoordinates";
const geodist = require("geodist");

export const getMatchedUsers = async (activity) => {
  console.log("Getting Matched Users!!!")
  const usersRef = db.collection("users");
  const matchedUsersDocs = await usersRef
    .where("interests", "array-contains", activity)
    .get();
  let matchedUsers = [];
  matchedUsersDocs.forEach((doc) => {
    matchedUsers.push(doc.data());

  });
  return matchedUsers;
};

export const calculateDistance = (currentUser, userList) => {
  return userList.map((user) => {
    const distance = geodist(
      currentUser,
      { latitude: user.latitude, longitude: user.longitude },
      { format: true, unit: "mi." }
    );
    return { ...user, distance };
  });
};

