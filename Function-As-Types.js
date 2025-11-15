"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log2(message) {
    console.log(message);
}
function performJob(cb) {
    cb("job done!");
}
;
performJob(log2);
let oneUser = {
    name: "max",
    age: 39,
    greet() {
        console.log("Hello there!");
        return this.name;
    }
};
oneUser.greet();
//# sourceMappingURL=Function-As-Types.js.map