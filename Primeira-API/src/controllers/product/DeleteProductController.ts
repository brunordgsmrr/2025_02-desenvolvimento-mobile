import {Request, Response} from "express";

class DeleteProductController{
    async handle(request: Request, response: Response) {
        const {id} = request.params;
        response.json({message: "Registro excluído com Sucesso", id});
    }
}
export {DeleteProductController};