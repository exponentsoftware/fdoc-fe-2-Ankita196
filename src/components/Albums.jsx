import  { useEffect } from "react";
import Album from "./Album"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    display:'flex',
    flexDirection:"row"
    
  },
 
  album :{
    color:'white',  
    fontSize:30,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:24
  },
  
 
}));


function Albums(props) {
   const classes = useStyles();
   const { data, setAlbums } = props;
 useEffect(() => {}, [props.data]);
  function deleteFile(e) {
    const s =props.data.filter((item, index) => index !== e);
    setAlbums(s);
   
  }
  return (
    <div >
    <br/><br/>
     <Typography className={classes.album}>{props?.title}</Typography>
     <br/>
     <Grid container spacing={5}>
     
      
        {props?.data?.length > 0 &&
          props?.data?.map((albumData,index) =>
          <Grid item
              xs={12}
              sm={3}
              style={{ marginLeft: 'auto', alignItems: 'center' }}>
           <Album data={albumData} key={index}  />
           <Button variant="contained" color="primary" onClick={() => deleteFile(index)}>
       delete
      </Button>
           </Grid>
           )}
     
    </Grid>
    </div>
  );
}


export default Albums;
