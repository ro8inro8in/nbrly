import { firebase } from '../../index';

export const createUser = async (
  profileData,
  selectedFile,
  email,
  password
) => {
  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const uid = userCredential.user.uid;
    const storageRef = firebase.storage().ref();
    const userPicRef = storageRef.child(`${uid}-image.jpg`);
    await userPicRef.put(selectedFile);
    const imageURL = await userPicRef.getDownloadURL();
    await firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .set({ ...profileData, profileImage: imageURL });
    alert('Profile successfully created.');
    //onclick = { logIn };
    window.location.href = '/Home';
  } catch (error) {
    alert('Sorry, something went wrong. Please try again.');
    console.log(error);
  }
};
