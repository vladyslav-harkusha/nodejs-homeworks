import nodemailer, { Transporter } from "nodemailer";

import { config } from "../configs/config";

class EmailService {
    private transporter: Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: config.EMAIL_USER,
                pass: config.EMAIL_PASSWORD,
            },
        });
    }

    public async sendEmail(): Promise<void> {
        await this.transporter.sendMail({
            to: "vladys.harkusha@gmail.com",
            subject: "Hello from node app",
            text: "Anasteysha is watching you",
        });
    }
}

export const emailService = new EmailService();
