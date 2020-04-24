class Publicador {
    constructor() {
      this.subscriptors = \[\];
    }

    subscribe(subscriptor) {
      this.subscriptors.push(subscriptor);
    }
  
    unsubscribe(subscriptor) {
      this.subscriptors = this.subscriptors.filter( item => item !== subscriptor );
    }
  
    notify(event) {
      this.subscriptors.forEach( item => {
        item.buzon.call(item, event);
      });
    }  
}

class Subscriptor {
  constructor(id) {
    this.id = id;
    console.log("Se ha creado el subscriptor #: " + id);
  }
  buzon(edicion) {
    console.log("Subscriptor # " + this.id + " recibió una nueva edición: " + edicion);
  }
}

const periodico = new Publicador();

const subscriptor1 = new Subscriptor(1);
const subscriptor2 = new Subscriptor(2);
const subscriptor3 = new Subscriptor(3);

console.log("--- Primera edición ---");

periodico.subscribe(subscriptor1);

periodico.subscribe(subscriptor2);

periodico.notify("Nueva edicion");

console.log("--- Segunda edición ---");

periodico.subscribe(subscriptor3); 

periodico.notify("Segunda edicion"); 

console.log("--- Tercera edición ---");

periodico.unsubscribe(subscriptor1); 

periodico.notify("Tercera edicion");