import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("E-mail/password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("E-mail/password incorrect");
        }

        const token = sign({
            email: user.email
        }, "9e86b6ed8b15f78a91ff6ffe0f86604d", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService };