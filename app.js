const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const Product = require('./models/product');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{constraints: true, onDelete:'CASCADE'});
User.hasMany(Product);

sequelize
    //.sync({forse: true}) rewrite
    .sync()
    .then(result=>{
        return User.findAll({
            where:{
                id:1
            }
        });
        
    })
    .then(user=>{
       if(!user){
          return User.create({
              name:'Uzik',
              email:'UzikBullet@SpeechGrammarList.com'
          });
        }
        return user;
    })  
    .then(user =>{
        console.log(user);
        app.listen(3000,()=>{
            console.log('Server is running...');
        })
    }
       
    )
    .catch(err=>{
        console.log(err);
    });

 

