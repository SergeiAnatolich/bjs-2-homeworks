function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks != undefined) {
    this.marks.push(mark);
  } else {
    this.marks = [mark];
  };
}

Student.prototype.addMarks = function (...args) {
  if (this.marks != undefined) {
    this.marks.push(...args);
  } else {
    this.marks = [...args];
  };
}

Student.prototype.getAverage = function () {
  if (this.marks != undefined) {
    let x;
    return this.marks.map(item => x += item, x = 0).reverse()[0] / this.marks.length;
  } else {
    console.log("not marks");
    return null;
  };
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
