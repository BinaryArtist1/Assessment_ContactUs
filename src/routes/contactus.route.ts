import { Router } from 'express';
import ContactController from '@/controllers/contact.controller';
import { Routes } from '@interfaces/routes.interface';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public contactController = new ContactController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/contact`, this.contactController.saveContact);
  }
}

export default UsersRoute;
