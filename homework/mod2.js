let calculator = {
    read() {
        this.num1 = +prompt('Введите первое число ', 1);
        this.num2 = +prompt('Введите второе число ', 1);
    },

    sum() {
        return (this.num1 + this.num2).toLocaleSrting()
    },

    mul() {
        return (this.num1 * this.num2).toLocaleSrting()
    }


}

calculator.read();

calculator.div = function() {
    return (this.num1 / this.num2).toLocaleSrting()
};

calculator.diff = function() {
    return (this.num1 - this.num2).toLocaleSrting();
};

console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator.div());
console.log(calculator.diff());
