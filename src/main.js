const ProductManager = require('./productManager');
const pathToFile = './productManager'; 
const productManager = new ProductManager(pathToFile);



//Llamar a getProducts, debe devolver un arreglo vacío []
// const productsBeforeAdd = productManager.getProducts();
// console.log('Productos antes de agregar:', productsBeforeAdd);

// //Llamar al método addProduct
// productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
// console.log('Producto agregado');

// //Llamar a getProducts nuevamente, ahora debe aparecer el producto recién agregado
// const productsAfterAdd = productManager.getProducts();
// console.log('Productos después de agregar:', productsAfterAdd);

// //Llamar al método getProductById y corroborar que devuelva el producto con el id especificado
// try {
//     const productById = productManager.getProductById(1);
//     console.log('Producto con id 1:', productById);
// } catch (error) {
//     console.error('Error:', error.message);
// }

//Llamar al método updateProduct y cambiar un campo de algún producto
const updateSuccess = productManager.updateProduct(1, 'Producto Modificado', 'Nueva descripción', 250, 'imagen.jpg', 'newcode', 30);
console.log('La actualización ha sido exitosa:', updateSuccess);

// // //Llamar al método deleteProduct y eliminar un producto
// productManager.deleteProduct(1);
// console.log('El producto ha sido eliminado');