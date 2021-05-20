'use strict';
const uuid = require('uuid').v4;//random

class Food{
    constructor() {
        this.db = [];
    }

    read(id) {
        if (id) {
            return this.db.find((val) => val.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        const food = {
            id: uuid(),
            data: obj,
        };
        this.db.push(food);
        return food;
    }

    delete(id) {

        this.db = this.db.filter((food) => food.id !== id);
        return this.db;
    }

    update(id, obj) {
        for (let i = 0; i < this.db.length; i++) {
            if(this.db[i].id === id) {
                this.db[i].data = obj;
                return this.db[i];
            } 
        }
    }
}

module.exports = Food;