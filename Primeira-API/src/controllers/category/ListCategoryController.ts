import {Request, Response} from 'express';

class ListCategoryController{
    async handle(request: Request, response: Response){
        const categories =[
            {id: 1, name: "Bebidas", description: "Bebidas Alcoólicas e Não Alcoólicas"},
            {id: 2, name: "Laticínios", description: "Leites, Queijos e Derivados"},
            {id: 3, name: "Higiene", description: "Produtos de Higiene Pessoal"},
            {id: 4, name: "Limpeza", description: "Produtos de Limpeza Doméstica"}
        ]
        return response.json(categories);
    }
}
export {ListCategoryController};