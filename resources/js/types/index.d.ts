export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export interface PageProps {
    auth: {
        user: User;
    };
}