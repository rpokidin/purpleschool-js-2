
class Billing {

	amount

	constructor(amount) {
		this.amount = amount
	}

	calculateTotal() {}
}

class FixBilling extends Billing {

	constructor(amount) {
		super(amount)
	}

	calculateTotal() {
		return this.amount
	}
}

class HourBilling extends Billing {

	constructor(amount, hours) {

		super(amount)
		this.hours = hours

	}

	calculateTotal() {

		return this.amount * this.hours

	}
}

class ItemBilling extends Billing {

	constructor(amount, items) {

		super(amount)
		this.items = items

	}

	calculateTotal() {
		return this.amount * this.items
	}
}

const fixBilling = new FixBilling(50)
console.log(fixBilling.calculateTotal())
const hourBilling = new HourBilling(10, 5)
console.log(hourBilling.calculateTotal())
const itemBilling = new ItemBilling(30, 20)
console.log(itemBilling.calculateTotal())