import React from 'react'
import './institute.css';
import { Form, Button, Row, Col } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import {useState,useEffect} from 'react';
import {UPLOAD_CSV} from '../../graphql/requests'
import AWS from 'aws-sdk'
import NavHome from '../../components/navbar/Nav';
const Institute = () => {
  const [ins_id,setID] = useState("");
  const [subject,setSubject] = useState("");
  const [sem,setSem] = useState(0);
  const [batch,setBatch] = useState(0);
  const [fileData,setFileData] = useState(null);
  const [progress , setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState([]);
  const [url,setURL] = useState("");
  const S3_BUCKET =process.env.REACT_APP_BUCKET_NAME;
  const REGION =process.env.REACT_APP_REGION_NAME;

    const uploadFile = () => {
      console.log(S3_BUCKET)
        let file;
        const ref = document.getElementById('uploadedFile').files
        if(ref.length!==0){
         file = ref[0];
         console.log(file)
        }
        else{
          console.log("lauda")
          return
        }
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        // myBucket.putObject(params)
        //     .on('httpUploadProgress', (evt) => {
        //         setProgress(Math.round((evt.loaded / evt.total) * 100))
        //     })
        //     .send((err) => {
        //         if (err) console.log(err)
        //     })
    }
  
  return (
    <div>
        <Form className="form-container" id="loginform">

          
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Institue ID</Form.Label>
              <Form.Control
                value={ins_id}
                type="text"
                placeholder="Enter Institute ID"
                onChange={(e) => {
                  setID(e.target.value);
                  console.log("gg")
                }}
              />
              
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Batch</Form.Label>
              <Form.Control
                value={batch}
                type="text"
                placeholder="Enter batch number"
                onChange={(e) => {
                  setBatch(e.target.value);
                }}
              />
              
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Semester</Form.Label>
              <Form.Control
                value={sem}
                type="text"
                placeholder="Enter Institute ID"
                onChange={(e) => {
                  setSem(e.target.value);
                }}
              />
              
            </Form.Group>
           
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                placeholder="Subject"
              />
            </Form.Group>

            <Form.Group >
              <Form.Label>Upload CSV File</Form.Label>
              <Form.Control
                type="file"
                id='uploadedFile'
                accept=".csv,.xlsx,.xls "
                onChange={
                  uploadFile
                }
                
              />
            </Form.Group>

            <Button
              className="mybtn"
              variant="primary"
              type="button"
            >
              Upload
            </Button>
          </Form>
    </div>
  )
}

export default Institute