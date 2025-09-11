import {Request, Response} from "express";

class CreateSalesController{
    async handle(request: Request, response: Response){
        const{id, value, discount, productId, ClientId} = request.body;
        const sales = {
            id: id,
            value: value,
            discount: discount,
            productId: productId,
            ClientId: ClientId
        }
        response.json({message: "Venda registrada com Sucesso"});
    }
}
export {CreateSalesController};