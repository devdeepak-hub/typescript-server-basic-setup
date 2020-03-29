
import dotenv from 'dotenv';
import app from './app';

// Route Controllers  => Look for overnightjs/core and other overnight typescript decorator packages
// IRouteController interface can be removed by using the decorator packages


dotenv.config();

const port = Number(process.env.PORT) || 3000;


app.listen(port);
