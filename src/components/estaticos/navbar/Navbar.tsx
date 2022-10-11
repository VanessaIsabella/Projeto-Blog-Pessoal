import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Navbar.css'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);
  let navigate= useNavigate();
  const dispatch = useDispatch();

  function goLogout(){
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: "top-right", 
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false, 
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
    navigate("/login")
  }
var navbarComponent;

if(token != ""){
navbarComponent= <AppBar className= "navbar" position="static">
<Toolbar variant="dense">
  <Box className="cursor">
    <Typography variant="h5" color="inherit" className="fonte">
      BlogPessoal
    </Typography>
  </Box>

  <Grid container justifyContent="flex-end">
    <Box display="flex" justifyContent="start">
      <Link to="/home" className="text-decorator-none">
      <Box mx={1} className="cursor">
        <Typography variant="h6" color="inherit" className="fonte">
          Home
        </Typography>
      </Box>
      </Link>

      <Link to="/posts" className="text-decorator-none">
      <Box mx={1} className="cursor">
        <Typography variant="h6" color="inherit" className="fonte">
          Postagens
        </Typography>
      </Box>
      </Link>

      <Link to="/tema" className="text-decorator-none">
      <Box mx={1} className="cursor">
        <Typography variant="h6" color="inherit" className="fonte">
          Temas
        </Typography>
      </Box>
      </Link>

      <Link to="/formularioTema" className="text-decorator-none">
      <Box mx={1} className="cursor">
        <Typography variant="h6" color="inherit" className="fonte">
          Cadastrar Temas
        </Typography>
      </Box>
      </Link>
    
          <Box mx={1} className='cursor' onClick={goLogout}>
              <Typography variant="h6" color="inherit" className="fonte">
                Logout
              </Typography>
          </Box>
        
    </Box>
  </Grid>
</Toolbar>
</AppBar>
}
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;