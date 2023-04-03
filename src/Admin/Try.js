import React, { useState, useEffect } from "react";

import firestore from "../firebase";
import { getFirestore } from "firebase/firestore";




function Try() {
    const db = getFirestore(firestore);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from Firestore
    db.collection("contact")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>Data from Firestore</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Try;
