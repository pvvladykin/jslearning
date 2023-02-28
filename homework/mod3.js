let arr = []
class Product {
    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        arr.push(this)
    }

}

function cond_to_valid_cond(condition) {
    let cond = condition.split('&');

    for (let i = 0; i < cond.length; i++) {
        cond[i] = cond[i].split('-')

        for (let j = 0; j < cond[i].length; j++) {
            if (cond[i][j].includes('=') || cond[i][j].includes('<') || cond[i][j].includes('>')) {
                for (let k = 0; k < cond[i][j].length; k++) {
                    let index = 0
                    if (cond[i][j] == '>' || cond[i][j] == '<' || cond[i][j] == '=') {
                        index = k
                    }
                    let temp = cond[i][1]
                    cond[i][1] = temp.slice(0, index + 1);
                    cond[i][2] = temp.slice(index + 1);
                }


            }
        }
    }
    return cond

}

function filter(condition, arr) {

    conds = cond_to_valid_cond(condition)

    for (let i = 0; i < arr.length; i++) {
        for (let cond of conds) {
            if (cond[1] == 'contains') {
                if (!arr[i][cond[0]].includes(cond[2])) {
                    arr[i].delete;
                    i--;
                }
            }
            else if (cond[1] == 'starts') {
                if (!arr[i][cond[0]].startsWith(cond[2])) {
                    arr[i].delete;
                    i--;
                }
            }
            /*else if (cond[1] == 'ends') {
                if (!arr[i][cond[0]].endsWith(cond[2])) {
                    arr[i].delete;
                    i--;
                }
            }*/

        }
    }
    return arr;
}

let bread1 = new Product('rye_breadfd', 3, 177, 'ordinary rye breadabc');
let bread2 = new Product('wheat_bread', 3, 177, 'ordinary wheat bread');
let milk_35 = new Product('milk_35', 2.5, 76, 'milk 3.5%');
let milk_20 = new Product('milk_20', 2.5, 76, 'milk 2.0%');
let dark_beer = new Product('dark_beer', 3.8, 40, 'kozel');
let light_beer = new Product('light_beer', 3.7, 37, 'kozel light');

console.log(bread1.name)

//“name-contains-fd&price-=2-&quantity->5&description-ends-abc”
console.log(filter('name-contains-fd&price-=2-&quantity->5&description-ends-abc', arr))

//console.log(arr)
