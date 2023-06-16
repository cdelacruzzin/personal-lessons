class car{
    model; year; make;
    constructor(model, year, make) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    setModel(newModel) {
        this.model = newModel;
    }
    setmake(newmake) {
        this.make = newmake;
    }
    setyear(newyear) {
        this.year = newyear;
    }
    getModel() {
        return this.model;
    }

    getyear() {
        return this.year;
    }
    getmake() {
        return this.make;
    }
    displayCarInfo(){
        var model = this.getModel();
        var make = this.getmake();
        var year = this.getyear();

        return `year: ${year}, model: ${model}, make: ${make}`
    }
}

module.exports = car;