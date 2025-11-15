type Role2 = "admin" | "editor" | "guest" | "reader";

type User = {
    name : string;
    age : number;
    role : Role;
    permissions: string[];
}

function access(role : Role2, user:User) {

}