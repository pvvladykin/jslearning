'use strict'
let base_arr = [];
let arrNew = [];

class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        base_arr.push(this);
    }

}

function cond_to_valid_cond(condition) { //строка с условиями -> условия
    let cond = condition.split('&');

    for (let i = 0; i < cond.length; i++) {

        cond[i] = cond[i].split('-');

        for (let j = 0; j < cond[i].length; j++) {
            if (cond[i][j].includes('=') || cond[i][j].includes('<') || cond[i][j].includes('>')) {
                for (let k = 0; k < cond[i][j].length; k++) {
                    let index = 0;
                    if (cond[i][j] == '>' || cond[i][j] == '<' || cond[i][j] == '=') {
                        index = k;
                    }
                    let temp = cond[i][1];
                    cond[i][1] = temp.slice(0, index + 1);
                    cond[i][2] = temp.slice(index + 1);
                }


            }
        }
    }

    return cond;

}

function filter(condition, base_arr) {

    console.log('Conditions:');

    let conds = cond_to_valid_cond(condition);

    for (let item of conds) console.log(item);

    for (let i = 0; i < base_arr.length; i++) {
        let counter = 0;
        for (let j = 0; j < conds.length; j++) {

            let x = base_arr[i][conds[j][0]];
            let y = conds[j][2];

            let cond_dict = {

                'contains': x.toString().includes(y.toString()),
                'starts': x.toString().startsWith(y.toString()),
                'ends': x.toString().endsWith(y.toString()),
                '>=': +x >= +y,
                '<=': +x <= +y,
                '=': +x == +y,
                '>': +x > +y,
                '<': +x < +y
            };

            if (cond_dict[conds[j][1]] == true) counter += 1;


        }
        if (counter == conds.length) arrNew.push(base_arr[i]);

    }
    return arrNew;
}

let bread1 = new Product('rye_breadfd', 3, 177, 'ordinary rye breadabc');
let bread2 = new Product('wheat_bread', 3, 177, 'ordinary wheat bread');
let milk_35 = new Product('milk_35', 2.5, 76, 'milk 3.5%');
let milk_20 = new Product('milk_20', 2, 76, 'milk 2.0%');
let dark_beer = new Product('dark_beer', 3.8, 40, 'kozel');
let light_beer = new Product('light_beer', 3.7, 37, 'kozel light');


let base_condition = 'name-contains-milk&price->=2-&quantity->5&description-ends-%';
let result = filter(base_condition, base_arr);

console.log('After filter:')

for (let item of result) {
    console.log(item);
}
