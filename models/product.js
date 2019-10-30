/*const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('insert into products (title,price,imageUrl, description) values (?,?,?,?)',
    [this.title, this.price, this.imageUrl, this.description]);
  }
  static deleteById(id){
    return db.execute('delete from products p where p.id =?',[id]);
  }

  static fetchAll() {
   return db.execute('SELECT p.* FROM products p');
  }

  static findById(id) {
    return db.execute('SELECT p.* FROM products p WHERE p.id =?',[id]);
  }
};
*/

const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title:{
    type: Sequelize.STRING,
    allowNull: false
  },
  price:{
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl:{
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;