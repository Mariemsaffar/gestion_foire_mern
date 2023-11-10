import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url('https://th.bing.com/th/id/R.02e8506254c229be260b317461a1d6bc?rik=7Ra%2borddD8nopg&riu=http%3a%2f%2fwww.kapitalis.com%2fanbaa-tounes%2fwp-content%2fuploads%2f2019%2f11%2fMall-Of-Sousse.jpg&ehk=mnv%2b8pFeaOv%2fw6%2f63BrH8Q0DJfTOvPv5f%2fm2tJBRaHc%3d&risl=&pid=ImgRaw&r=0')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  content: {
    backgroundColor: '#fff',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    animation: '$fade-in 1s ease-out',
  },
  section: {
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  image: {
    width: '100%',
    maxWidth: '800px',
    borderRadius: theme.spacing(2),
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  '@keyframes fade-in': {
    '0%': {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
        <header>
        <div className={classes.root}>
        <div className={classes.content}>
         <Typography variant="h3" gutterBottom>
          The perfect place to own your first stand
         </Typography>
         <Typography variant="body1">
          Don't miss this exciting opportunity to grow your business and make a lasting impression!
         </Typography>
        </div>
        </div>
        </header>
 
 
      <footer>
        <p>Tous droits réservés © 2023. Réservez dès maintenant!</p>
      </footer>
   
   
 
   
  </>
  );
}

export default Home;
