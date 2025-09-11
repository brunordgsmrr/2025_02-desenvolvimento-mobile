import { Request, Response } from "express";

class UpdateClientController {
    handle(request: Request, response: Response) {
        const id = request.params.id;
        const novoCliente = request.body;
        response.json({ message: "Registro atualizado com Sucesso", id, novoCliente });
    }
}
export { UpdateClientController };