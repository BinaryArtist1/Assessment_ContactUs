import App from '@/app';
import ContactUsRoute from '@routes/contactus.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new ContactUsRoute()]);

app.listen();
