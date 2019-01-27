interface Peter {
  name: string;
  age: number;
  address: {};
}

// custom implementation - typescript has the "Pick" method build in which does
// exactly the same.
type MyPick<T, K extends keyof T> = { [P in K]: T[P] };

const peter: Pick<Peter, "name" | "age"> = {
  name: "Ingo",
  age: 33
};

console.log(peter);
