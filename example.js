const { buildSchema } = require('./schema-builder');

const query = {
  obj: {
    id: '@GraphQLID',
    name: 'test object',
    nested: {
      objects: { supported: true },
    },
    arrays: ["we're supported too!"],
    number: 2,
    floats: 1.2,
    booleanSupport: true,
    class: '@Person',
    objectArrays: [{ areSupported: true }],
  },
};

const person = {
  id: '@GraphQLID',
  name: 'John',
  age: 39,
  occupation: 'Engineer',
};

const definitions = { query, person };

console.log(buildSchema({ typeDefs: definitions, spaces: 2 }));
// This console log produces the following output:
// type Objects {
//   supported: Boolean
// }

// type Nested {
//   objects: Objects
// }

// type ObjectArrays {
//   areSupported: Boolean
// }

// type Obj {
//   id: GraphQlID
//   name: String
//   nested: Nested
//   arrays: [String]
//   number: Int
//   floats: Float
//   booleanSupport: Boolean
//   class: Person
//   objectArrays: [ObjectArrays]
// }

// type Query {
//   obj: Obj
// }

// type Person {
//   id: GraphQlID
//   name: String
//   age: Int
//   occupation: String
// }
