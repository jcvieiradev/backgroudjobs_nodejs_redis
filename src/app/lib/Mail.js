import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail.js'

export default nodemailer.createTransport(mailConfig);