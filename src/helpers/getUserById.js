const { db } = require('../configFirebase');

export const getUserById = async (id) => {
  const userDoc = await db.collection('users').doc(id).get();
  return userDoc;
};
