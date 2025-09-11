import {Request, Response} from 'express';

class DeleteSalesController{
    async handle(request: Request, response: Response){
        const{id} = request.params;
        console.log(`Deletando a venda com ID: ${id}`);
        response.json({message: `Venda com ID ${id} deletada com sucesso`});
    }
}
export {DeleteSalesController};