class Car {
    public brand: string;
    private speed: number;
    protected fuel: string;

    constructor(brand: string, speed: number, fuel: string) {
        this.brand = brand;
        this.speed = speed;
        this.fuel = fuel;
    }

    public accelerate(): void {
        this.speed += 10;
        console.log(`Accelerating to ${this.speed} km/h`);
    }

    private refuel(): void {
        console.log(`Refueling with ${this.fuel}`);
    }

    protected honk(): void {
        console.log("Honk, Honk!");
    }

    public displayCarInfo(): void {
        console.log(`Brand: ${this.brand}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Fuel: ${this.fuel}`);

        this.refuel();
        this.honk();
    }
}

const car1 = new Car("BMW", 120, "Petrol");

car1.displayCarInfo();
car1.accelerate();  