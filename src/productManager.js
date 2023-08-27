const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        this.loadData();
    }

    loadData() {
        try {
            const data = fs.readFileSync(this.path, 'utf8'); // Leer los datos existentes desde el archivo y cargarlos en this.products
            this.products = JSON.parse(data);
        } catch (error) { // Si hay un error al leer el archivo o no existe, inicializamos la lista de productos vacía.
            this.products = [];
        }
    }

    saveData() {
        try { // Guardar los datos de this.products en el archivo
            const data = JSON.stringify(this.products, null, 2);
            fs.writeFileSync(this.path, data);
        } catch (error) {
            console.error('Error al guardar los datos:', error);
        }
    }

    addProduct() { // Crear un nuevo producto y agregarlo a la lista de productos
        const new_id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
        const product = {
            id: new_id,
            title: "Honda CBR 1000RR",
            description: "Honda CBR 1000cc, de las más rapidas del mercado",
            price: 68000,
            thumbnail: 'https://img.remediosdigitales.com/24a60c/honda-cbr1000rr-r-sp-fireblade-2020-014/1366_2000.jpg',
            code: 1234,
            stock: 10
        };
        this.products.push(product);
        this.saveData();
    }

    getProducts() { // Retorna todos los productos
        return this.products;
    }

    getProductById(product_id) { // Busca y retorna el producto correspondiente al id
        const product = this.products.find(product => product.id === product_id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    updateProduct() { // Busca el producto con id y actualiza sus campos
        const productIndex = this.products.findIndex(product => product.id === product_id);
        if (productIndex !== -1) {
            this.products[productIndex] = {
                ...this.products[productIndex],
                id: new_id,
                title: "Honda CBR 1000RR",
                description: "Honda CBR 1000cc, de las más rapidas del mercado",
                price: 68000,
                thumbnail: 'https://img.remediosdigitales.com/24a60c/honda-cbr1000rr-r-sp-fireblade-2020-014/1366_2000.jpg',
                code: 1234,
                stock: 10
            };
            this.saveData();
            return true;
        }
        return false;
    }

    deleteProduct(product_id) { // Eliminar el producto con id de la lista de productos
        this.products = this.products.filter(product => product.id !== product_id);
        this.saveData();
    }
}

module.exports = ProductManager;