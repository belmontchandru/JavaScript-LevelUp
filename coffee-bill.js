noofCoffees = [2,4,1,6,5];

//function for adding thearray elements to find out total no of coffees sold.
function Coffee(noofCoffees) {
    const totalCoffee = noofCoffees.reduce((coffeeSum, coffeeSold) => {
        return coffeeSum + coffeeSold;
    }, 0);

    return `The total bill is $${totalCoffee*1.25};`
}

const totalAmount = Coffee(noofCoffees);
console.log(totalAmount);