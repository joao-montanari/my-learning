import z from "zod";
import { FastifyTypedInstance } from "./types";
import { randomUUID } from "node:crypto";

interface User {
    id: string
    name: string
    email: string
}

const users: User[] = [];

export async function routes(app: FastifyTypedInstance) {
    app.get('/users', {
        schema: {
            tags: ['users'],    // Tag usada para atribuir o end-point a um conjunto na documentação
            description: 'List users',   // Descrição da rota
            response: {     // O que é retornado após a requisição ser finalizada
                200: z.array(z.object({
                    id: z.string(),
                    name: z.string(),
                    email: z.string(),
                }))
            }
        }
    }, () => {
        return users;
    });

    app.post('/users', {
        schema: {
            tags: ['users'],    // Tag usada para atribuir o end-point a um conjunto na documentação
            description: 'Create a new user',   // Descrição da rota
            body: z.object({    // Tipa o corpo que é recebido por meio do post
                name: z.string(),
                email: z.string().email(),
            }),
            response: {     // O que é retornado após a requisição ser finalizada
                201: z.null(),
            },
        }
    }, async (request, reply) => {
        // extrai as informações recebidas na requisição
        const { name, email } = request.body;

        const user: User = {
            id: randomUUID(),
            name,
            email,
        }

        users.push(user);

        // Retorna o status code 201 mostrando que a requisição foi bem sucedida
        return reply.status(201).send();
    });
}