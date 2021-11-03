// ------------------------/Generics/---------------------
// -----/ Without interfaces
// All generic data types are written inside "<>"
const addId = <T>(obj: T) => {
  // T will be the type that we pass
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

const user4 = {
  name: "Jack",
};

const result = addId(user4); //user4 will be the argument type

// -----/ With interfaces

const addId2 = <Ty extends object>(obj: Ty) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface3 {
  name: string;
}

const user5: UserInterface3 = {
  name: "Jack",
};

const result2 = addId2<UserInterface3>(user5); //user5 will be the argument type

// -------/Generics with interface

// Generics allow us to provide different data type
// If we dont have generics this means that for every time that we need a different type we have to create a new interface and extends every time.

const addId_ = <Ty extends object>(obj: Ty) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};
interface UserInterface4<T> {
  name: string;
  data: T;
}

const user6: UserInterface4<{ meta: string }> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
};

const user7: UserInterface4<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
};

const result_ = addId_<UserInterface4>(user7); // ?????????

// --------------/Passing serveral data types
const addId3 = <Ty extends object>(obj: Ty) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};
interface UserInterface5<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user8: UserInterface5<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "bar",
};

const user9: UserInterface5<string[], number> = {
  name: "John",
  data: ["foo", "bar", "baz"],
  meta: 124,
};

const result4 = addId3<UserInterface5>(user8); // ?????????
