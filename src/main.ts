class Greeter {
  constructor(public name: string) {}

  say() {
    console.log(`Hi ${this.name}!`);
    return "hi";
  }
}

const greeter = new Greeter("Ingo");
greeter.say();
