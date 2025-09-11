import { Request, Response } from "express";

class CreateProductController{
    async handle(request: Request, response: Response) {
        const {id, name, EAN, price, description, caregoryId} = request.body;
        const product ={
            id: id,
            name: name,
            EAN: EAN,
            price: price,
            description: description,
            caregoryId: caregoryId
        }
        response.json({message: "Registro incluido com Sucesso"});
    }
}

export {CreateProductController};