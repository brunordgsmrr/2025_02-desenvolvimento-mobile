import { Request, response, Response } from 'express';

class CreateCategoryController{
    async handle(request: Request, response: Response){
        const {id, name, description} = request.body;
        const category ={
            id: id,
            name: name,
            description: description
        }
        response.json({message: "Registro incluido com Sucesso"});
    }
}
export {CreateCategoryController};