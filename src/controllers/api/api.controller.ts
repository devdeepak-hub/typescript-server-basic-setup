import express, { Router, Request, Response } from 'express';

import IRouteController from '@src/interfaces/IRouteController.interface';

class APIController implements IRouteController {
  path = '/api';

  router: Router;

  constructor() {
    this.router = express.Router();
    this.router.get(this.path, this.getApi);
  }

  getApi = (req: Request, res: Response) => {
    res.send(`TODO => Rest Api root for serve-note ${this.path}\n`);
  };
}

export default APIController;
