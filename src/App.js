import "./App.styled.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/index.jsx";
import ProjectPageLayout from "./Components/ProjectPage/ProjectPageLayout.jsx";


//FONTS
import "../src/styles/font.css";
import { AppStyled } from "./App.styled.jsx";
import { firebaseDb } from "./firebase/FirebaseLoader.js"
import { onValue, ref } from "firebase/database";
import { useState,useEffect } from "react";
import React from 'react';

export const FirebaseContext = React.createContext();


function App() {

    // const [trackFirebase, setTrackFirebase] = useState(0);
    const [firebaseConstants,setFirebaseConstants] = useState({});

    //to reload the app on firebase values changes
    useEffect(() => {
        const query = ref(firebaseDb, "server");
        return onValue(query, (snapshot) => {

          const data = snapshot.val();
          setFirebaseConstants(data);

        },(error) => {
            console.error('Firebase error:', error);
          });
      }, []);

    return (
        <AppStyled>
            <FirebaseContext.Provider value={firebaseConstants}>

                <Routes>
                    <Route path="/portfolio/project" element={<ProjectPageLayout/>} firebaseConstants={firebaseConstants} ></Route>
                    <Route path="/portfolio" element={<Layout />} firebaseConstants={firebaseConstants} ></Route>
                </Routes>

            </FirebaseContext.Provider>
        </AppStyled>
    );
}

export default App;
