function sumInput() {

    let numbers = [];

    while (true) {

        let chislo = prompt("Введите число", 0);

        // Прекращаем ввод?
        if (chislo === "" || chislo === null || !isFinite(chislo)) break;

        numbers.push(+chislo);
    }

    numbers.sort((a, b) => a - b);
    alert(numbers);

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;

}


alert(sumInput());