import React from "react";
import "./adimnHome.css";
import { Link } from "react-router-dom";
import { LogoutOutlined, CloseOutlined } from "@ant-design/icons";
import { Pagination, message } from "antd";

 import firestore from "../firebase";

import { getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  deleteField,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import Try from "./Try";

export default function AdimnHome() {

//  const db = getFirestore(firestore);
  const [data2, setData2] = React.useState();
  const [data3, setData3] = React.useState();
  const [AllData, setAllData] = React.useState();
  const [store, setStore] = React.useState();
  const [load, setLoad] = React.useState();
  const [index3, setIndex3] = React.useState(0);

  // const newData3 = async () => {
  //   const querySnapshot = await getDocs(collection(db, "contact"));
  //   let arr = [];
  //   querySnapshot.forEach((doc) => {
  //     arr.push(doc.data());
  //   });
  //   setData3(arr);
  //   console.log(arr);
  //   setStore(arr);
  // };
  // React.useEffect(() => {
  //   newData3();
  // }, [load]);

  // const Delete3 = async (docc3) => {
  //   await deleteDoc(doc(db, "contact", docc3));
  // };

  // const DeleteContact = () => {
  //   Delete3(data3[index3].email)
  //     .then(() => {
  //       console.log("success");
  //       message.success("Success");
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       message.error("Error");
  //       window.location.reload();
  //     });
  // };


  return (
    <div className="adminHomeBody">
      <div className="adminHomeHDiv">
        <h1 className="adminHomeHtext">
          <span>Ad</span>min<span>Dashboard</span>
        </h1>
        <Link to="/" className="adminHomeLink">
          <LogoutOutlined className="adminHomeIcon" />
        </Link>
      </div>
      <div className="adminHomeLine" />
      
      <div className="adminHomeDiv">
        {/* Name */}
        <div style={{display:'flex'}}>
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP">Name: </p>
          <p className="adminHomeColumnSceP"> Akash Tasnim Shahriar</p>
          {/* <p className="adminHomeColumnSceP">{data2 && data3[index3].name ? data3[index3].name : ""}</p> */}
        </div>
        <div style={{flex:'5'}}/>
        {/* <CloseOutlined onClick={DeleteContact} className="adminHomeCloseIcon"/> */}
        </div>
        {/* Email */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Email: </p>
          <p className="adminHomeColumnSceP1">akash.tasnim@gmail.com</p>
        </div>
        {/* Age */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Age: </p>
          <p className="adminHomeColumnSceP1">20</p>
        </div>
        {/* Phone */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Phone: </p>
          <p className="adminHomeColumnSceP1">01580233165</p>
        </div>
        {/* Other's Link */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Other's Link: </p>
          <p className="adminHomeColumnSceP1">https://akash.www.com</p>
        </div>
        {/* Message */}
        <div className="adminHomeColumnDiv">
          <p className="adminHomeColumnP1">Message: </p>
          <p className="adminHomeColumnSceP1">I there, i am akash.</p>
        </div>

        <div style={{ height: "30px" }} />
      </div>
      <div style={{ height: "20px" }} />
      <Pagination
                className="adminPagination"
                onChange={(index, size) => {
                  setIndex3(index - 1);
                }}
                defaultCurrent={1}
                total={data3 ? data3.length * 10 : ""}
              />
            
      <div>gg</div>
      <Try/>
    </div>
  );
}
