import { CreateContactUsDto } from '@/dtos/contactus.dto';
import { HttpException } from '@exceptions/HttpException';
import { ContactUs } from '@/interfaces/contactus.interface';
import contactUsModel from '@/models/contact.model';
import { isEmpty } from '@utils/util';

class ContactUsService {
  public users = contactUsModel;

  public async saveContact(contactData: CreateContactUsDto): Promise<ContactUs> {
    if (isEmpty(contactData)) throw new HttpException(400, "userData is empty");

    const createUserData: ContactUs = await this.users.create({ ...contactData });

    return createUserData;
  }
}
export default ContactUsService;
