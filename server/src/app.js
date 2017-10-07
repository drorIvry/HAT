import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import users from './routes/users';
import routes from './routes';
import mongoose from 'mongoose';
import pledge from './routes/pledge';
import {addToBucket, pourBucket, filterBucket} from './routes/bucketActions';

const app = express();
app.disable('x-powered-by');

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev', {
  skip: () => app.get('env') === 'test'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

//Mongo
mongoose.connect('mongodb://localhost:27017/hat');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Routes
app.use('/', routes);
app.use('/users',users);
app.use('/pledge',pledge);
app.get('/bucket', pourBucket);
app.post('/bucket', addToBucket);
app.post('/filterBucket',filterBucket)


// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res
    .status(err.status || 500)
    .render('error', {
      message: err.message
    });
});

export default app;
