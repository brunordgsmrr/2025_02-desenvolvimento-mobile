import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const passwordTemp = await hash("1234", 8);
        const passwordMatch = await compare(password, passwordTemp); // hash for '123456'

        if (!passwordMatch) {
            throw new Error("Password incorrect");
        }

        const token = sign({ email: email }, "1234", {
            subject: "admin",
            expiresIn: "1d",
        });
        return token;
    }
}

export { AuthenticateUserService };
