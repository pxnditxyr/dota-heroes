export interface Hero {
    id: string;
    name: string;
    another_name: string;
    attribute: string;
    attack: string;
    information: string;
};

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    logged: boolean;
};
