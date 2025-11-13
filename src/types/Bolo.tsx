export interface Bolo {
    descricao: string;
    nome: string;
    id: string | undefined;
    caterosias: string[];
    imagens: string[];
    preco: number;
    peso: number | null;
}