class Volume {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  calc() {
    return (Math.PI * (this.radius * this.radius) * this.height).toFixed(4);
  }
}

const c = new Volume(3, 3);
console.log(c.calc());
