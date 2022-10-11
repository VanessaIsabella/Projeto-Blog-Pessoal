import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button, Grid } from "@material-ui/core"
import {Navigate, useNavigate, useParams } from 'react-router-dom'
import {Box} from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../model/Tema';
import { busca, buscaId, post, put } from '../../service/Service';



function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const [token, setToken] = useLocalStorage('token');
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema " + JSON.stringify(tema))
    
            if (id !== undefined) {
                console.log(tema)
                put(`/tema`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema atualizado com sucesso');
            } else {
                post(`/tema`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Tema cadastrado com sucesso');
            }
            back()
    
        }
    
        function back() {
            navigate("/temas")
        }
  
        return (
            <>
                <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                    <Grid alignItems="center" item xs={6}>
                        <Box paddingX={20} >
                            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Box marginRight={1}>
                                <ModalPostagem />
                            </Box>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <img src="https://espressomontecarlo.com/wp-content/uploads/2019/02/cafe-bio-thumb.jpg" alt="" width="100%"  />
                    </Grid>
                    <Grid xs={12} className='postagens'>
                        <TabPostagem />
                    </Grid>
                </Grid>
            </>
        );
    }    

export default CadastroTema;