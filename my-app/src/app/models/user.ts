export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: Role;
    username: string;
    profilePhotoUrl: string;
    companies?: Companies[];
    gender: Gender;
}

export interface Address {
    city: string;
    street: string;
    postalCode: string;
}

export interface Companies {
    id: number;
    name: string;
    description: string;
    location: Address;
}

export enum Role {
    STAFF = 'Staff',
    STUDENT = 'Student', 
    MANAGER = 'Manager', 
    ADMIN = 'Admin'
};
export enum Gender {
    MALE = 'Male', 
    FEMALE = 'Female', 
    OTHER = 'Other'
};