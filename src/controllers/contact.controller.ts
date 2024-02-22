import { NextFunction, Request, Response } from 'express';
import ContactUsService from '@/services/contactus.service';

class ContactController {
  public contactUsService = new ContactUsService();
  public saveContact = (req: Request, res: Response, next: NextFunction) => {
    try {
      this.contactUsService.saveContact(req.body.contactData);
      res.sendStatus(200).json({msg:"Thank you!"});
    } catch (error) {
      next(error);
    }
  };
}

export default ContactController;
