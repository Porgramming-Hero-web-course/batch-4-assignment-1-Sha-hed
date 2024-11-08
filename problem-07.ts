{
    // Start

    class Car{
        constructor(public make:string, public model:string, public year:number){
        }
        getCarAge(){
            const currentYear = new Date().getFullYear();
            return currentYear-this.year;
        }
    }

    const car = new Car("Honda", "Civic", 2018)
    car.getCarAge()
    
    // End
    
}