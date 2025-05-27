import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { validatorCompiler, serializerCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod';
import { fastifySwagger } from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { routes } from './routes';

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Define que a validação dos dodos de entrada vai ser feito pelo ZOD
app.setValidatorCompiler(validatorCompiler);
// Define que a validação dos dodos de saída vai ser feito pelo ZOD
app.setSerializerCompiler(serializerCompiler);

// Libera qualque cliente para fazer a requisição
app.register(fastifyCors, {
    origin: '*'
});

// Configuração da documentação no Swagger
app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Typed API',
            version: '1.0.0',
        }
    },
    transform: jsonSchemaTransform, // Configuração para mostrar a tipagem dos schemas
});

// Mostra que a documentação deve ficar no caminho /docs
app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
});

// Adiciona as rotas de usuário
app.register(routes);


// Inicia o servidor na porta 3000
app.listen({
    port: 3000,
}).then(() => {
    console.log('HTTP server is running!');
});