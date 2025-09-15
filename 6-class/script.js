
class Car {

    #brand
    #model
    #mileage

    constructor(brand, model, mileage) {

        this.#brand = brand
        this.#model = model
        this.#mileage = mileage
        
    }

    get mileage() {

        return this.#mileage

    }

    set mileage(newMileage) {

        this.#mileage = newMileage

    }

    info() {

        console.log(`Марка: ${this.#brand}. Модель: ${this.#model}. Пробег: ${this.#mileage}`)
        
    }

}

const audi = new Car('audi', 'A8', 150000)
audi.mileage = 10000
audi.info()
