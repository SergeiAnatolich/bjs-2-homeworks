class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = 1.5 * this.state;
    }

    set state(newState) {
        if (newState <= 0) {
            this._state = 0;
        } else if (newState >= 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = null
        this.books.forEach(element => {
            if (element[type] === value) {
                book = element;
            }
        });
        return book;
    }

    giveBookByName(bookName) {
        let book = null
        let i = 0;
        this.books.forEach(element => {
            if (element.name === bookName) {
                book = element;
                this.books.splice(i, 1);
            }
            i++;
        });
        return book
    }
}

class Student {
    constructor (name, gender, age) {
        this.name = name,
        this.gender = gender,
        this.age = age;
    }

    addMark (mark, subject) {
        if (mark < 1 || mark > 5) {
            console.log("оценка должна быть от 1 до 5")
            return;
        }
        if (!this[subject]) {
            this[subject] = [mark];
        } else {
            this[subject].push(mark);
        } 
    }

    getAverageBySubject (subject) {
        if (!this[subject]) {
            return "Несуществующий предмет";
        } else {
            let x;
            return this[subject].map(item => x += item, x = 0).reverse()[0] / this[subject].length;
        }
    }

    getAverage () {
        let subject = [];
        for (let property in this) {
            if (property != "name" && property != "gender" && property != "age" && property != "excluded") {
                subject.push(property);
            }
        }
        if (subject.length === 0) {
            return "Студент не посещает не одного предмета";
        } else {
            let average = [];
            for (let i = 0; i < subject.length; i++) {
                average.push(this.getAverageBySubject(subject[i]));
            }
            let x;
            return average.map(item => x += item, x = 0).reverse()[0] / average.length;
        }
    }

    exclude (reason) {
        let subject = [];
        for (let property in this) {
            if (property != "name" && property != "gender" && property != "age") {
                subject.push(property);
            }
        }
        subject.forEach(element => {
            delete this[element];
        });
        this.excluded = reason;
    }
}