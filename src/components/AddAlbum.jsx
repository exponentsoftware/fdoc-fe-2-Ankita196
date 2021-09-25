import {useState } from "react";
import Album from "./Album"
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';





export default function AddAlbum() {
 
const [album_cover,  setFile] = useState([])
   
  
     
     const handleChange = (e) =>{
          setFile([...album_cover, URL.createObjectURL(e.target.files[0])]);
}



  function deleteFile(e) {
    const s =album_cover.filter((item, index) => index !== e);
    setFile(s);
   
  }

  return (
    
     <>
      <div>
        <form >
        <h1 style={{color:'white',marginRight:200}}>Add Albums</h1>
           <input
           margin="normal"
         type="file" onChange={handleChange} />
          </form>
          </div>
       <div >
    <br/><br/>
    
     <br/>
     <Grid container spacing={5}>
       {album_cover.length > 0 &&
         album_cover.map((albumData,index) =>
          <Grid item
              xs={12}
              sm={3}
              style={{ marginLeft: 'auto', alignItems: 'center' }}>
           <Album data={albumData} key={index}/>
           <Button variant="contained" color="primary" onClick={() => deleteFile(index)}>
       delete
      </Button>
           </Grid>
           )}
     
    </Grid>
    </div>
   </>
  );
}

