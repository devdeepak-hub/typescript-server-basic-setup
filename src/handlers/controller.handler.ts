import express, { Application } from 'express';
import IRouteController from '@src/interfaces/IRouteController.interface';


class ControllerHandler {
  public expressApp: Application;


  constructor(appInit: {middlewares: any; controllers: IRouteController[]}) {
    this.expressApp = express();

    this.setMiddlewares(appInit.middlewares);
    this.setControllers(appInit.controllers);
  }

  // Create a type system for middleware
  private setMiddlewares(middlewares: []) {
    middlewares.forEach((middleware) => this.expressApp.use(middleware));
  }

  private setControllers(controllers: IRouteController[]) {
    controllers.forEach((controller) => this.expressApp.use('/', controller.router));
  }

  public listen(port: number) {
    this.expressApp.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Listening on ${port}`);
    });
  }
}

export default ControllerHandler;
