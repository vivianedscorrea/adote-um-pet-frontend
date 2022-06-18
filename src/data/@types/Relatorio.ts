import { Pet } from "./Pet";
import Titulo from "../../ui/components/Titulo/Titulo";


export interface Relatorio {
    id: number;
    email: string;
    valor: string;
    pet: Pet;
}