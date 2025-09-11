import {Request, Response} from "express";
class CreateClientController{
    async handle(request: Request, response: Response){
       const{id, name, cpf, email, adress, zipcode, number, city, state} = request.body;
       const client = 
       {
        id: id,
        name: name,
        cpf: cpf,
        email: email,
        adress: adress,
        zipcode: zipcode,
        number: number,
        city: city,
        state: state
       }
       response.json({messagr: "Registro incluido com Sucesso"})
    }
}
export {CreateClientController}