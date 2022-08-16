import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, } from "react-bootstrap";
import { useMutation, useQuery } from "@apollo/client";
import TextField from '@mui/material/TextField';
import {Grid, Divider, Button, Select, MenuItem, InputLabel, FormControl, Typography , FormGroup } from '@mui/material';
import "./login.css";
import { TEST_QUERY, TEST_MUTATION } from "../../graphql/requests";
import NavHome from "../../components/navbar/Nav";
import login from '../../assets/login.gif'

const Login = (props) => {
  const [user, setUser] = useState("");
  const [email, setMail] = useState("");
  const [pass, setPass] = useState("");
  const history = useNavigate();
  const testdata = useQuery(TEST_QUERY);
  const [getToken, { data: meal }] = useMutation(TEST_MUTATION, {
    variables: {
      username: email,
      password: pass,
    },
  });
  const conditionalLogin = async () => {
    console.log(email, pass);
    const tokendata = await getToken({
      variables: {
        username: email,
        password: pass,
      },
    });
    if (tokendata) {
      console.log(tokendata);
    } else {
      console.log("lauda");
    }
    if (testdata) {
      console.log(testdata);
    }
    //if(user==="institute")
    // {
    //   history("/institue")
    // }
    // else if(user==="manager")
    // {
    //   history("/manager")
    // }
    // else
    // {
    //     alert("Invalid Login Credentials");
    // }
  };
  const options = ['Institute', 'Manager']

  return (
    <div >
     <NavHome />
     <center>
      <Typography variant='h3'style={{marginTop : '15vh', fontWeight: 700}}>
        Welcome to FridayNight's portal
      </Typography>
      </center>

      <Grid container id="loginrow" >
      <Grid item lg={6} xs={12}> 
      <center>
      <img src={login} alt="login" style={{ width: '50%' ,height: 'auto', margin: '5vh'}} />
      </center>
      </Grid>
      <Divider orientation="vertical" flexItem/>
        <Grid item lg = {5.5} xs={12}>
        <center style={{ margin : '5vh'}} >
          <FormControl className="form-container" id="loginform">

          <FormControl size="small" sx={{my: 2,  width : '100%'}}>
            <InputLabel id="demo-select-small">Login as:</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={user}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              label="Choose"
            >
            <MenuItem value={'Institute'}>Institute</MenuItem>
            <MenuItem value={'Manager'}>Manager</MenuItem>
            </Select>
          </FormControl>

            <FormGroup controlId="formBasicEmail" >
            <TextField 
              sx={{  my : 2 , width : '100%'}}
              id="filled-basic" 
              label="User Name" 
              variant="outlined" 
              value={email}
              type="text" 
              required  
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />              
            </FormGroup>
           
            <FormGroup controlId="formBasicPassword" >
            <TextField 
            sx={{  my : 2, width: '100%' }}
              id="filled-basic" 
              label="Enter Password" 
              variant="outlined" 
              type="password"
              required
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            /> 
            </FormGroup>
              <center style={{ marginTop : '5vh'}}>
            {user.length ? 
            <Button variant="contained"  onClick={conditionalLogin} >
              Login as {user}
            </Button>
            :
            <Button variant="contained" href="#contained-buttons" disabled>
              Login 
            </Button>
            }
            </center>
          </FormControl>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
