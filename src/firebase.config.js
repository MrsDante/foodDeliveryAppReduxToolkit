import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB82cWpfYzmccgMaw5sr64Q9x73aiKRGtk",  
    authDomain: "restaurantapp-89685.firebaseapp.com",  
    databaseURL: "https://restaurantapp-89685-default-rtdb.firebaseio.com",  
    projectId: "restaurantapp-89685",  
    storageBucket: "restaurantapp-89685.appspot.com",  
    messagingSenderId: "1043122098661",  
    appId: "1:1043122098661:web:5f7f9d8fc5ebc307019f0c"  
  };
  

 // const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};