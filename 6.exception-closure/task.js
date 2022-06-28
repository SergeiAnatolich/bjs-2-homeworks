function parseCount (count) {
    let resultParse = Number.parseInt(count);
    if (isNaN(resultParse)) {
        throw new Error("Невалидное значение");
    }
    return resultParse;
}

function validateCount (count) {
    try {
        let resultParse = parseCount(count);
        return resultParse;
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor (a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a,
        this.b = b,
        this.c = c
    }

    getPerimeter () {
        if (!this.a || !this.b || !this.c) {
            return "Ошибка! Треугольник не существует";   
        }
        return this.a + this.b + this.c;
    }

    getArea () {
        if (!this.a || !this.b || !this.c) {
            return "Ошибка! Треугольник не существует";    
        }
        let p = 0.5 * this.getPerimeter(this.a, this.b, this.c);
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number((s).toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch (error) {
        return new Triangle;
    }
}