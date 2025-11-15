type Role2 = "admin" | "editor" | "guest" | "reader";

type User = {
    name : string;
    age : number;
    role : Role2;
    permissions: string[];
}

function access(role : Role2, user:User) {

}