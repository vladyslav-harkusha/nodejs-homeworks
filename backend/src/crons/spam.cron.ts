import { CronJob } from "cron";

import { emailConstants } from "../constants/email.constants";
import { EmailEnum } from "../enums/email.enum";
import { User } from "../models/user.model";
import { emailService } from "../services/email.service";

const handler = async () => {
    const users = await User.find();

    for (const user of users) {
        const userName = user.name;
        const userEmail = user.email;

        await emailService.sendEmail(userEmail, emailConstants[EmailEnum.SPAM], {
            name: userName,
        });
    }
};

export const spamCron = new CronJob("1 1 1 * *", handler);
