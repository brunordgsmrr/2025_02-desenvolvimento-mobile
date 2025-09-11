import {Request, Response} from 'express';

class UpdateSalesController{
    async handle(request: Request, response: Response){
        const{id} = request.params;
        const{value, discount, productId, ClientId} = request.body;
        const sales = {
            id: id,
            value: value,
            discount: discount,
            productId: productId,
            ClientId: ClientId
        }
        response.json({message: `Venda com ID ${id} atualizada com sucesso`});
    }
}
export {UpdateSalesController};