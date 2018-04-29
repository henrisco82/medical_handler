"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    PasswordValidator.cannotContainSpace = function (formControl) {
        if (formControl.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    };
    return PasswordValidator;
}());
exports.PasswordValidator = PasswordValidator;
//# sourceMappingURL=passwordValidator.js.map