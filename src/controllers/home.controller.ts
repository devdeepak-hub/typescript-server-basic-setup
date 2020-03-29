import express, { Router, Request, Response } from 'express';
import IRouteController from '@src/interfaces/IRouteController.interface';

/**
 * This controller can be used for Server-Side Rendering of React-pages for serve-note
 */

class HomeController implements IRouteController {
  path = '/';

  router: Router;

  constructor() {
    this.router = express.Router();
    this.router.get(this.path, this.getHomePage);
  }

  getHomePage = (req: Request, res: Response) => {
    res.send(`TODO => Server-Sode Rendering for Homepage ${this.path}\n`);
  };
}

export default HomeController;
