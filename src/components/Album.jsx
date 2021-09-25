import React from 'react';
// import rockstar from "./rockstar.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:50,
    display:'flex',
    flexDirection:"row"
  },
  paper: {
    height:360,
    width:270,
    backgroundColor:"#212121",
   padding:10
   
  },
  

  album :{
    color:'white',  
    fontSize:20,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:24
  },
  name:{
    color:'#bdbdbd',  
    fontSize:17,
    fontFamily: "sans-serif",
     textAlign:"left",
     marginLeft:24,
     textDecoration:"underline"
  },
  image :{
     height:230,
    width:230,
    marginTop:40,
     marginRight: 'auto',
    marginLeft: 'auto',
    
  
  }
  
}));

export default function Album({data}) {
 
  const classes = useStyles();

  

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
       
              <Paper className={classes.paper}>
             
             <Paper
       className={classes.image}
        style={{
          backgroundImage: `url('${data}')`,
        backgroundSize:'100% 100%',marginTop:30
        }}
      >   <IconButton >
          <PlayCircleFilledIcon style={{ color:'green',fontSize:70, marginTop:140,marginLeft:130}}/>
           </IconButton>
              </Paper>
              
                    <br/>
                  <Typography className={classes.album}>Rockstar</Typography>
                  <Typography className={classes.name}>A. r.Rahman</Typography>
            
              </Paper>  
      </Grid>
    </Grid>
  );
}
