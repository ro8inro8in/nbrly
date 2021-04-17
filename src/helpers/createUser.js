import { app, storage } from '../configFirebase';


export const createUser = async (profileData, selectedFile, email, password) => {
  const userCredential = await app
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const uid = userCredential.user.uid;
  const storageRef = storage.ref();
  const userPicRef = storageRef.child(
    `${profileData.firstName}-${profileData.lastName}-${Math.floor(
      Math.random() * 1000
    )}-image.jpg`
  );
  await userPicRef.put(selectedFile);
  const imageURL = await userPicRef.getDownloadURL();
  await app
    .firestore()
    .collection("users")
    .doc(uid)
    .set({ ...profileData, profileImage: imageURL, email });
  return userCredential;
};
