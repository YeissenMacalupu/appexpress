const express = require("express");
const router = express.Router();
const productosModel = require("../models/productos");

/**
 * @swagger
 * components:
 *  schemas:
 *    Productos:
 *      type: object
 *      properties:
 *        img:
 *          type: string
 *          description: Nombre del producto
 *        nombre:
 *          type: string
 *          description: Edad del usuario
 *        precio:
 *          type: number
 *          description: Correo del usuario
 *      required:
 *        - img
 *        - nombre
 *        - precio
 *      example:
 *        img: ../img/momento-1.jpg
 *        nombre: Core Keeper
 *        precio: S/. 30.25
 */



/**
 * @swagger
 * /api/productos:
 *  post:
 *    summary: Crear un producto
 *    tags: [Productos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#components/schemas/Productos'
 *    responses:
 *      200:
 *        description: Producto creado correctamente
 */

//Crear un usurio 
router.post("/productos", (req, res) => {
    const product = productosModel(req.body);
    product.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});


/**
 * @swagger
 * /api/productos:
 *  get:
 *    summary: Listar todos los productos
 *    tags: [Productos]
 *    responses:
 *      200:
 *        description: Productos listados correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *            items:
 *              $ref: '#components/schemas/Productos'
 *  
 */

// Leer todos los usurios 
router.get("/productos", (req, res) => {
    productosModel.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});

/**
 * @swagger
 * /api/productos/{id}:
 *  get:
 *    summary: Listar todos los productos
 *    tags: [Productos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del productos a buscar
 *    responses:
 *      200:
 *        description: Productos encontrado
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schemas/Productos'
 *      404:
 *        description: No existe el usuario
 */


//Buscar un usurio por id 
router.get("/productos/:id", (req, res) => {
    const { id } = req.params;

    productosModel.findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});


// Actualizar datos de un usurio 
router.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, correo } = req.body;

    productosModel
        .updateOne({ _id: id }, { $set: { nombre, edad, correo } })
        .then((data) => res.json(data))
        .catch((error) => res.json)
});

/**
 * @swagger
 * /api/productos/{id}:
 *  delete:
 *    summary: Eliminar productos por id
 *    tags: [Productos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id del producto a eliminar
 *    responses:
 *      200:
 *        description: Productos eliminado
 *      404:
 *        description: No existe el producto
 */


// Eliminar un usurio
router.delete("/productos/:id", (req, res) => {
    const { id } = req.params;

    productosModel.deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ mensaje: error }));
});
module.exports = router;