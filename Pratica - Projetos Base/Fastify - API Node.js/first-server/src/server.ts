import fastify from "fastify";

const app = fastify();

// REST
// Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, (...)
// Corpo da requisição (Request Body)
// Parametros de busca (Search Params / Query Params) `http://localhost:3000/users?name=Joao`
// Parametros de rota (Router Params) -> Identificação de recursos `DELETE http://localhost:3000/users/5`
// Cabeçalho (Headers) -> Contexto da requisição = Timezone, Token, (...)

// Semânticas = Significado

app.get('/', () => {
    return 'Hello Dev!'
})

app.listen({
    port: 3000
}).then(() => {
    console.log('HTTP server running!');
});