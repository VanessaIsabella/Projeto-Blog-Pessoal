import React, {useState, useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import {  Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material'
import './ListaTema.css';
import Tema from '../../../model/Tema';
import useLocalStorage from 'react-use-localstorage';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../service/Service';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage ('token');
  let navigate = useNavigate();

  useEffect (()=>{
    if (token === ''){
      alert ("Você precisa estar logado")
      navigate('/login')
    }
  }, [token])

  //função que vai até o backend buscar os temas
  async function getTema(){
    await busca("/tema", setTemas, {
      headers: {
        'Autorization': token
      }
    })
  }

  useEffect (()=>{
    getTema()
  }, [temas.length])


  return (
    <>
    {
      temas.map(tema =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

            <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}


export default ListaTema;