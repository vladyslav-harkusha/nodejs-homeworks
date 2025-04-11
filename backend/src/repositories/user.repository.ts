import { IUser, IUserCreateDTO, IUserQuery } from "../interfaces/user.interface";
import { User } from "../models/user.model";
// import { FilterQuery } from "mongoose";

class UserRepository {
    public getAll(query: IUserQuery): Promise<[IUser[], number]> {
        const skip = query.pageSize * (query.page - 1);

        return Promise.all([User.find().limit(query.pageSize).skip(skip), User.countDocuments()]);
    }
    public create(user: IUserCreateDTO): Promise<IUser> {
        return User.create(user);
    }
    public getById(userId: string): Promise<IUser> {
        return User.findById(userId);
    }
    public updateById(userId: string, newUser: Partial<IUser>): Promise<IUser> {
        return User.findByIdAndUpdate(userId, newUser, { new: true });
    }
    public deleteById(userId: string) {
        return User.findByIdAndDelete(userId);
    }
    public getByEmail(email: string): Promise<IUser> {
        return User.findOne({ email });
    }
    public blockUser(userId: string): Promise<IUser> {
        return User.findByIdAndUpdate(userId, { isActive: false }, { new: true });
    }
    public unbBlockUser(userId: string): Promise<IUser> {
        return User.findByIdAndUpdate(userId, { isActive: true }, { new: true });
    }
}

export const userRepository = new UserRepository();
