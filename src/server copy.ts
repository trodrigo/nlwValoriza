import express, { request, response } from "express";

const app = express();

/**
 * Métodos
 * GET    => Buscar uma informação
 * POST   => Inserir ou criar uma informação 
 * PUT    => Alterar uma informação
 * DELETE => Deletar uma informação
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de parametros
 * Routes Params => http://localhost:3000/produtos/47555552
 * 
 * Query Params  => http://localhost:3000/produtos?name=teclado&discription=bomestado
 * 
 * Body Params   => {
 *   "name": "teclado",
 *   "description": "bomestado"
 * }
 */

app.get("/test", (request, response) => {
    // Request => Entrando
    // Response => Saindo
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST")
})

// http://localhost:3000
app.listen(3000, () => console.log("Server running NLW"));