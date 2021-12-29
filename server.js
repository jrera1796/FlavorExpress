const express = require('express');
const sequelize = require('./config/connection');
const PORT = process.env.PORT || 3001;
const routes = require('./controllers');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost/${PORT}`));
});