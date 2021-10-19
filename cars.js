function cars(make, model, colour, image, registrationNumber, price){
    return {
        make,
        model,
        colour,
        image,
        registrationNumber,
        price,
        editPrice(newPrice){
             return this.price=newPrice;
        },
        showAll(){
            return `all the details about ${this.make},${this.model},${this.colour},${this.image},${this.registrationNumber},${this.price}`
        }
    }
}
const car1=new cars(1,2,3,4,5,6);
const car2=new cars(10,20,30,40,50,60);
const car3=new cars(10,20,30,40,50,60);
const car4=new cars(10,20,30,40,50,60);
const car5=new cars(10,20,30,40,50,60);
console.log(car1.editPrice(300));
console.log(car1.showAll());

