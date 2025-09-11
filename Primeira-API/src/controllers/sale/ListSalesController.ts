import {Request, Response} from "express";

class ListSalesController{
    async handle(request: Request, response: Response){
        const sales = {
            id: 1,
            value: 100,
            discount: 10,
            productId: 1,
            ClientId: 1
        };
        response.json({sales});
    }
}
export {ListSalesController};
