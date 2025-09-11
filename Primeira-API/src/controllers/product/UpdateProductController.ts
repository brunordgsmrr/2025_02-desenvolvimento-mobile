import {Request, Response} from "express";

class UpdateProductController{
    async handle(request: Request, response: Response) {
        const id = request.params.id;
        const products = request.body;
        return response.json({message: "Registro atualizado com Sucesso", id, products});
    }
}
export {UpdateProductController};