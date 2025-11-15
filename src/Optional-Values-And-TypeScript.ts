function generateError(msg?: string) {
    throw new Error(msg)
};
generateError();

type User4 = {
    name: string;
    age: number;
    role?: "admin" | "guest"
}