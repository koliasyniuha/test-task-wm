const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const { customerRoute, productRoute, multipleRoute } = require('./routes/v1');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', customerRoute);
app.use('/v1', productRoute);
app.use('/v1', multipleRoute);
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

module.exports = app;
