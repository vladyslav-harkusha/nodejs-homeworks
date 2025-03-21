import { RoleEnum } from "../enums/role.enum";
import { IBase } from "./base.interface";

interface IUser extends IBase {
    _id: string;
    email: string;
    password: string;
    role: RoleEnum;
    name: string;
    surname: string;
    age: number;
    isDeleted: boolean;
    isVerified: boolean;
}

type IUserCreateDTO = Pick<IUser, "email" | "password" | "name" | "surname" | "age">;
type IUserUpdateDTO = Pick<IUser, "name" | "surname" | "age">; // data transfer object
type IUserSignInDTO = Pick<IUser, "email" | "password">;

export type { IUser, IUserCreateDTO, IUserSignInDTO, IUserUpdateDTO };
