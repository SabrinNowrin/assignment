import "./Upload.css";
import React, { useState } from "react";
import Axios from "axios";
import Papa from "papaparse";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

let fileContent = [];
let filepointer = null;
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const notify = (message) => toast.info(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});
const csvprocess= (file)=>{
    fileContent = [];

    Papa.parse(file, {
        complete: function (results) {
          console.log("inside CSV process");
          let arr = [];
          let temp ;
          for (const x of results.data) {
            if(x[0] && x[1] && validateEmail(x[2])){
               temp = {
                "firstname": x[0],
              "lastname": x[1],
              "email": x[2]
              }
               arr.push(temp);
            }
           
           }
           Axios.post('http://localhost:8080/api/employees/upload', {
            fileContent: arr,
           }).then((response)=>{
                console.log('Success');
                if(response.data.success ===true){
                  notify("Success:"+ arr.length +", Error:" + (results.data.length-arr.length));
                } else{
                   notify("Success: 0, Error: " +results.data.length);
                  }
             });
          console.log(fileContent);
          // process the JSON
        }
      });
};


function Upload() {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      console.log("File Uploaded With Drag & Drop");
      filepointer = e.target.files[0];
    }
  };
  
  // triggers when file is selected with click
  const handleChange = function(e) {
   
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      console.log("File Uploaded With Upload");
      filepointer = e.target.files[0];
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  const onUpload = () =>{
    csvprocess(filepointer);
  }
  return (
    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>Select a file</button>
        </div> 
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
      <button onClick={onUpload}> Upload </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <ToastContainer />
    </form>
  );
}

export default Upload;