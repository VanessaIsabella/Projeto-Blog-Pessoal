import Tema from './Tema'
import User from "./User"

interface Postagem{
    id: number;
    título: string;
    texto: string;
    data: string
    tema?: Tema| null
    usuario?: User | null
}

export default Postagem