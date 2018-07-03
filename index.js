document.write("hello, webpack! I'm watching for changes");
const dress = () => {
  document.write('.<br> I like your dress.<br>');
}
dress();

class Car {

  manufacturer(car) {
    document.write(`I have a ${car}`);
  }
}

const bmw = new Car;
bmw.manufacturer('bmw');
