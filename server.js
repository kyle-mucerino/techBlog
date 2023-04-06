// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const sequelize = require('./config/config');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.envPORT || 3001;

// const hbs = exphbs.create({ helpers });

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {
//     maxAge: 24 * 60 * 60 * 1000,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'strict'
//   },
//   resave: false,
//   saveUnitialized: false,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(
//   session({
//     secret: "Super secret secret",
//     resave: false,
//     saveUninitialized: false
//   })
// );


// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handelbars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });