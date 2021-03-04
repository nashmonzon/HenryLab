import { fade, makeStyles } from '@material-ui/core';


export const navBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },

  fondo: {
    backgroundColor: "#212121"
  },

  title: {
    flexGrow: 1,
    display: 'none',
    fontSize: '0.8rem',
    [theme.breakpoints.up('sm')]: {
      display: 'block',

    },
  },
  colorText: {
    color: "#979696"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {

    alignSelf: 'end',
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },

  },
  search: {

    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(5),
    marginLeft: 50,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    color: 'white',
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    
  },

  textLink: {
    color: 'inherit',
    textDecoration: 'inherit'
}

  



}));