"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// choices
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = 0;
userRole = Role.Guest;
//# sourceMappingURL=Working-With-Enums.js.map