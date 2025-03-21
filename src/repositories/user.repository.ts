import { IUser, IUserCreateDTO, IUserUpdateDTO } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
    public getAll(): Promise<IUser[]> {
        return User.find();
    }
    public create(user: IUserCreateDTO): Promise<IUser> {
        return User.create(user);
    }
    public getById(userId: string): Promise<IUser> {
        return User.findById(userId);
    }
    public updateById(userId: string, newUser: IUserUpdateDTO): Promise<IUser> {
        return User.findByIdAndUpdate(userId, newUser, { new: true });
    }
    public deleteById(userId: string) {
        return User.findByIdAndDelete(userId);
    }
    public getByEmail(email: string): Promise<IUser> {
        return User.findOne({ email });
    }
    public changeIsActive(userId: string, isActive: boolean): Promise<IUser> {
        return User.findByIdAndUpdate(userId, { isActive }, { new: true });
    }
}

export const userRepository = new UserRepository();
