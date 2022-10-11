import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Navbar.css'
import {useNavigate} from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function Navbar() {
  const [token, setToken] = useLocalStorage('token')
  let navigate= useNavigate();

  function goLogout(){
    setToken('')
    alert ('Usuário deslogado')
    navigate("/login")
  }
  return (
    <>
      <AppBar className= "navbar" position="static">
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

              <Link to="/temas" className="text-decorator-none">
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
    </>
  );
}

export default Navbar;