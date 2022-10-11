import { Typography, Button } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UsuarioLogin from '../../model/UserLogin';
import { api, login } from '../../service/Service';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login('usuarios/logar', userLogin, setToken);
    } catch (error) {
      alert('Dados de usuário inválidos, Tente novamente.')
    }
  }

  useEffect(() => {
    if (token !== '') {
      navigate('/home');
    }
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} alignItems="center" justifyContent="center">
          <Box paddingX={20}>
            <form onSubmit={conectar}>
              <Typography variant="h2" align="center" className="fonte"> 
                Entrar 
              </Typography>

              <TextField className="fonte"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                value={userLogin.usuario}
                id="usuario" 
                name="usuario"
                label="Usuário"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField className="fonte"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
                value={userLogin.senha}
                id="senha"
                name="senha" 
                label="Senha"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />
              <Box display="flex" justifyContent="center" marginTop={2} >
                <Button type="submit" className="fonte" variant="contained" color="primary" style={{backgroundColor:'#857b71'}}>
                  Entrar 
                </Button>
              </Box>
            </form>

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" className="fonte">
                  Ainda não tem uma conta?
                </Typography>
              </Box>
              <Link to="/cadastrousuario">
                <Typography variant="subtitle1" align="center" className="fonte">
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} className="bg-login"></Grid>
      </Grid>
    </>
  );
}

export default Login;