require('./styles.scss');

document.write("hello, webpack! I'm watching for changes. Add changes for check hot reload");
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
