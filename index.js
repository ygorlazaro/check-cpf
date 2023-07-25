const INVALID_CPFS = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];
const MAX_CPF_SIZE = 11;

const checkCpf = (cpf) => {
    if (cpf.length !== MAX_CPF_SIZE) {
        return false;
    }

    if (INVALID_CPFS.includes(cpf)) {
        return false;
    }

    const sum = calculateSum(cpf);
    const dig1 = calculateDigit(sum, 10);
    const dig2 = calculateDigit(sum, 11);

    return cpf === cpf.substring(0, 9) + dig1.toString() + dig2.toString();
};

const calculateSum = (cpf) => {
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        const character = cpf.charAt(i);
        const digit = Number(character);

        if (!validDigits.includes(character)) {
            return false;
        }

        sum += digit * (10 - i);
    }

    return sum;
};

const calculateDigit = (sum, subtractor) => {
    const mod = sum % subtractor;
    let digit = subtractor - mod;
    digit %= 10;

    return digit;
};

module.exports = checkCpf;
