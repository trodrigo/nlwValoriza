import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAutenticated(
    request: Request,
    response: Response,
    next: NextFunction) {
    // Receber o Token
    const authToken = request.headers.authorization;

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // Validar se token é válido
    const [, token] = authToken.split(" ");

    try {
        //const decode = verify(token, "9e86b6ed8b15f78a91ff6ffe0f86604d");
        const { sub } = verify(token, "9e86b6ed8b15f78a91ff6ffe0f86604d") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;

        next();
    } catch (err) {
        return response.status(401).end();
    }
}