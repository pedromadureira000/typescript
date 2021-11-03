/// ---------------------------/Variables /-------------------

let somevar: string = "somestring";

/// ---------------------------/Functions /------------------
const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};

console.log(getFullName("Pedro", "Henrique"));

// ---------------------------/Objects/ ---------------------
const user: { name: string; age: number } = {
  name: "Monster",
  age: 30,
};

// ---------------------------/Interfaces /-----------------
// interfaces help us to describe entities
interface UserInterface {
  name: string;
  age: number;
  getMessage(): string;
}

const user2: UserInterface = {
  name: "Monster",
  age: 30,
  getMessage() {
    return "hello" + name; //weird
  },
};

// by default all properties in interface are mandatory. For optional propertie use '?'

interface User2 {
  name: string;
  age?: number;
}

const newUser2: User2 = {
  name: "Joao",
};

// ------------------------/Unions /---------------------
let pageName: string | number = "1"; //union operator
let errorMessage: string | null = null; // null is default value
let user_: UserInterface | null = null;

// ------------------------/type alias/---------------------
// alias is important for architectural pattern
type ID = string;
interface IUser {
  id: ID;
  name: string;
  surname: string;
}

type PopularTag = string;
type MaybePopularTag = PopularTag | null;
const PopularTags: PopularTag[] = ["dragon", "coffe"];
// userfull when you are using a entities whitch is not a interface
const dragonTag: MaybePopularTag = "oi";

// ------------------------/Any, void, never, unknown /---------------------
// Void: when we dont return something from a function
// Any: Turns off typescript checks
// Never: used only in libs
// unknown: Is simillar to any, but can raise error "type unknown is not assignable to type 'string', when you try to assing a typed variable to an unknown value." We cant assing unknown directly in other type. You cant reference

// ------------------------/Type assertion/---------------------
let vUnknown: unknown = 10;
let s1: string = vUnknown as string; //we convert unknown type to string type.

let pageNumber: string = "1";
// let numericPageNumber: number = pageNumber as number	 // {don't work. Because is necessary to convert to unknown first}
let numericPageNumber: number = pageNumber as unknown as number; // {don't work. Because is necessary to convert to unknown first}
