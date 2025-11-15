

function log2(message: string) {
    console.log(message);
}
function performJob(cb : (msg: string) => void) {
    cb("job done!");
};

performJob(log2)

type User3 = {
    name: string;
    age: number;
    greet: () => string;
};

let oneUser: User3 = {
    name: "max",
    age: 39,
    greet() {
        console.log("Hello there!");
        return this.name;
    }
}

oneUser.greet();