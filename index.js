const checkCpf = (cpf) => {
    if (cpf === null || cpf === undefined) {
        return false;
    }

    const MAX_CPF_SIZE = 11;

    if (cpf.length !== MAX_CPF_SIZE) {
        return false;
    }

    if (
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"
    ) {
        return false;
    }

    let number = 0;
    let char = "";
    const numbers = "0123456789";
    let j = 10;
    let sum = 0;
    let mod = 0;
    let dig1 = 0;
    let dig2 = 0;
    let cpfAux = "";

    cpfAux = cpf.substring(0, 9);

    for (let i = 0; i < 9; i++) {
        char = cpfAux.charAt(i);

        if (numbers.search(char) == -1) {
            return false;
        }
        number = Number(char);
        sum += number * j;
        j--;
    }
    mod = sum % 11;
    dig1 = 11 - mod;

    if (dig1 > 9) {
        dig1 = 0;
    }
    j = 11;
    sum = 0;
    cpfAux += dig1;

    for (let i = 0; i < 10; i++) {
        char = cpfAux.charAt(i);
        number = Number(char);
        sum += number * j;
        j--;
    }
    mod = sum % 11;
    dig2 = 11 - mod;

    if (dig2 > 9) {
        dig2 = 0;
    }
    cpfAux += dig2;

    if (cpf != cpfAux) {
        return false;
    }

    return true;
};

module.exports = checkCpf;