import { collection, getDocs } from "firebase/firestore";
import db from "../environments/firebaseConfig";

const getData = async () => {
	const querySnapshot = await getDocs(collection(db, "posts"));

	const data = [];

	querySnapshot.forEach((doc) => {
		data.push(doc.data());
	});

	// return data;
};

export default getData;
