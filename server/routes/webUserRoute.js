const expres = require('express');
const { webUserController } = require('../controllers/webUserController');

const webUserRoutes = expres.Router();



webUserRoutes.post('/register', webUserController.register)
webUserRoutes.post('/confirm', webUserController.confirm)
webUserRoutes.post('/login', webUserController.login)
webUserRoutes.post('/token', webUserController.token)
webUserRoutes.post('/forgetpassword', webUserController.forgetpassword)
webUserRoutes.put('/changepassword', webUserController.changepassword)









module.exports = {
    webUserRoutes
}