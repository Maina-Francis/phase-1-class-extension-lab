class Polygon {
  constructor(arr) {
    this.arr = arr;
  }

  get countSides() {
    //count the number of characters in the array
    return this.arr.length;
  }

  get perimeter() {
    let total = 0;
    for (let i = 0; i < this.arr.length; i++) {
      total += this.arr[i];
    }
    return total;
  }
}

// class Triangle inherits from Polygon
class Triangle extends Polygon {
  get isValid() {
    if (
      this.arr[0] + this.arr[1] > this.arr[2] &&
      this.arr[1] + this.arr[2] > this.arr[0] &&
      this.arr[2] + this.arr[0] > this.arr[1]
    )
      return true;
    else return false;
  }
}

// class Square inherits from Polygon
class Square extends Polygon {
  get isValid() {
    return this.arr[0] === this.arr[1] ? true : false;
  }

  get area() {
    return Math.pow(this.arr[0], 2);
  }
}
