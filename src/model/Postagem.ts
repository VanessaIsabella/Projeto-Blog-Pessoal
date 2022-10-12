import Tema from './Tema'
interface Postagem{
    id: number;
    título: string;
    texto: string;
    tema?: Tema| null
}

export default Postagem;