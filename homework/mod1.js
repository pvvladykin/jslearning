
let strings_module = {}

strings_module.to_lower = function (str) {
    return str[0].toUpperCase() + str.slise(1).toLowerCase();
};

strings_module.punct = function (str) {
    str_split = str.split(' ').filter(item => item != '').join(' ');

    for (let sign of ['.', ',', '?', '!']) {
        
        str_split = str_split.split(sign);

        for (let i = 0; i < str_split.length; i++) {

            let check_end = str_split[i].endsWith(' ');
            let check_start = !str_split[i].startsWith(' ');

            if (check_end == true) {
                str_split[i] = str_split[i].slice(0, -1);
            }

            if (check_start == true && i != 0) {
                str_split[i] = ' ' + str_split[i].slice(0);
            }
        }

        str_split = str_split.join(sign);

    }
    return str_split;
}

strings_module.wordsNumber = function (str) {
    return str.split(' ').length;
}

strings_module.wordsNumberUnique = function (str) {
    let str_split = str.split(' ');

    let counter = {};

    for (let i = 0; i < str_split.length; i++) {
        if (str_split[i].endsWith(',')
            || str_split[i].endsWith('.')
            || str_split[i].endsWith('?')
            || str_split[i].endsWith('!')) str_split[i] = str_split[i].slice(0, -1);

        let key = str_split[i].toLowerCase();
        if (!(key in counter)) counter[key] = +1
        else {
            counter[key]+= +1;
        }
    }
    for (let key in counter){
        console.log(`Слово "${key}" встречается ${counter[key]} раз/а`);
    }
}

console.log(strings_module.punct('Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'));

console.log(strings_module.wordsNumber('glad to see you'));

strings_module.wordsNumberUnique('Текст, в котором слово текст несколько раз встречается и слово тоже');