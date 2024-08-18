const { Product } = require('../models/Product')

// Adicionar uma nova categoria
const CreateProduct = async (req, res) => {
    try {
        Product.create(req.body).then((result) => res.status(201).send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};

// Buscar todos os categorias
const SearchProductAll = async (req, res) => {
    try {
        Product.findAll().then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar todas as categorias' });
    }
};

// Buscar um Category por ID
const SearchProductId = async (req, res) => {
    try {
        Product.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao burcar produto' });
    }
};

// Atualizar uma Category por ID
const UpdateProduct = async (req, res) => {
    try {
        Product.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

// Deletar uma Category por ID
const DeleteProduct = async (req, res) => {
    try {
        Product.destroy({ where: { id: req.params.id } }).then((result) => {
            res.send('deletei com sucesso essa quantidade de linhas: ' + result)
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar categoria' });
    }
};

module.exports = {
    CreateProduct, SearchProductAll, SearchProductId, UpdateProduct, DeleteProduct
}