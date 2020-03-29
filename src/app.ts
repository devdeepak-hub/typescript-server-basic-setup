// Middlewares

import morgan from 'morgan';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';


// Controllers

import HomeController from './controllers/home.controller';
import APIController from './controllers/api/api.controller';

// Handler

import ControllerHandler from './handlers/controller.handler';


const app = new ControllerHandler({
  middlewares: [
    helmet(),
    cors(),
    express.json(),
    morgan('dev'),
  ],
  controllers: [
    new HomeController(),
    new APIController(),
  ],
});


export default app;
