import {Request, Response} from 'express';

class DeleteCategoryController{
    async handle(request: Request, response: Response){
        const id = request.params;
        console.log(id);
        response.json({message: `Registro ${id} excluído com Sucesso`});
    }
}
export {DeleteCategoryController};