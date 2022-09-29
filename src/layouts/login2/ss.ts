type Validator = (val: any) => true | string;

export function createValidator(...validators: Validator[]) {
    return function (val: string) {
        let result: true | string = true;
        for (let i = 0; i < validators.length; i++) {
            result = validators[i](val);
            if (typeof result === "string") {
                break;
            }
        }
        return result;
    };
}

export function checkRequiredField(val: string) {
    return val && val.trim() != "" ? true : "Required field";
}

export function checkEmail(val: string) {
    const re =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(val) ? true : "Invalid email";
}

export function checkPassword(val: string) {
    return val.length >= 3 ? true : "Password must be at least 3 characters";
}