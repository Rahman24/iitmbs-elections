import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  setDoc,
  orderBy,
  updateDoc
} from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getMessaging, onMessage } from "firebase/messaging";
import { addToCache, getFromCache } from "./cache";

export const getProfileDetails = async () => {
  // var res = await getFromCache("user");
  // if (res!=false) {
  //   return res
  // } else {
    const auth = getAuth();
    const user = auth.currentUser;
    const { displayName: userName, email } = user;
    const db = getFirestore();
    try {
      const userDoc = await getDoc(doc(db, "users", email.replace('student.onlinedegree', "ds.study")));
      const data = userDoc.data();
      console.log('==',data)
      addToCache("user", {
        userName,
        email,
        ...data
      })
      return {
        userName,
        email,
        ...data
      };
    } catch (err) {
      signOut(auth);
      alert("Sign in using your student login email");
      return {};
    }
  // }
};

export const signInFirebase = async () => {
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "student.onlinedegree.iitm.ac.in",
  });
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...

      
      return {
        status: "success",
        token,
        user,
      };
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return {
        status: "error",
        errorCode,
        errorMessage,
        email,
        credential,
      };
    });
};

export const updateFCMTokenToDB = ({ fcm }) => {
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  const { email } = user;
  return setDoc(doc(db, "subscription", email), { fcm }).catch((err) => {
    alert(err);
  });
};

export const onMessageListener = () => {
  const messaging = getMessaging();
  return new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};

const getSec = async (house) => {
  const db = getFirestore();
  const q = query(collection(db, `elections/${house}/secretary`), orderBy("name"))
  const secDoc = await getDocs(q);
  let sec = [];
  secDoc.forEach(doc => sec.push(doc.data()))
  console.log("[==]" ,sec)
  return sec;
}

const getDySec = async (house) => {
  const db = getFirestore();
  const q = query(collection(db, `elections/${house}/deputy-secretary`), orderBy("name"))
  const dySecDoc = await getDocs(q);
  let dySec = [];
  dySecDoc.forEach(doc => dySec.push(doc.data()))
  return dySec;
}

const getWebAd = async (house) => {
  const db = getFirestore();
  const q = query(collection(db, `elections/${house}/web-admin`), orderBy("name"))
  const webAdDoc = await getDocs(q);
  let webad = [];
  webAdDoc.forEach(doc => webad.push(doc.data()))
  return webad;
}

const getMentors = async (house) => {
  const db = getFirestore();
  const q = query(collection(db, `elections/${house}/mentor`), orderBy("name"))
  const mentorDoc = await getDocs(q);
  let mentors = [];
  mentorDoc.forEach((doc) => {mentors.push(doc.data())})
  return mentors;
}

export const getElectionCandidates = async () => {
  // var res = await getFromCache("nominations");
  // console.log(res)
  // if (res!=false) {
  //   return res
  // }
  const user = await getProfileDetails();
  const house = user.house.split(" ")[0].toLowerCase();
  const sec = await getSec(house);
  const dysec = await getDySec(house);
  const webad = await getWebAd(house);
  const mentor = await getMentors(house);
  addToCache("nominations", {...user, sec, dysec, webad, mentor})
  console.log(sec)
  return {...user, sec, dysec, webad, mentor};
}

export const updateVote = async (r) => {
  const db = getFirestore();
  const voteDoc = doc(db, 'elections', 'votes')
  const userDoc = doc(db, 'users', r.email)
  var data = {}
  data[r.email.split("@")[0]] = r
  updateDoc(userDoc, {voted: true}).then(() => {
    updateDoc(voteDoc, data).then(async (r) => {
      var user = await getFromCache("user")
      var nominations = await getFromCache("nominations")
      nominations.voted = true
      user.voted = true;
      addToCache("user", user)
      addToCache("nominations", nominations)
      return true;
    }).catch((e) => {
      updateDoc(userDoc, {voted: false});
      return false
    })
  }).catch(e => false)
}