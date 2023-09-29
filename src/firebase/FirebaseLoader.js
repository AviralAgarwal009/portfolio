import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { serviceAccount } from "./service_account";


const app = initializeApp(serviceAccount);

export const firebaseDb = getDatabase(app);
