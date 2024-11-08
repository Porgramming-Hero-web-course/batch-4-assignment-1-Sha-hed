# The significance of union and intersection types in Typescript.

Union and Intersection types are important features in TypeScript that help ensure type safety in your code.

# **Union :** 
Union types allow a variable to be one of several possible types, denoted by the "|" symbol.

 1) A variable with a union type can only use methods and properties that exist on all of its constituent types. If it tries to access a property that doesn't exist on one of them, TypeScript will throw a compile-time error.
 2) You can perform conditional checks at runtime to determine which type a union value currently holds using the typeof operator or other custom logic.

**Example :**

    let userId: string | number;

    userId = 'abc123';

    userId = 456;

   
In this case, userId can either be a string or a number. This is useful when you have multiple functions with different parameter types but similar functionality.

**Example :**

    type FrontendDeveloper = 'SeniorDev'|'juniorDev'

    const newDeveloper : FrontendDeveloper = 'juniorDev'
In this scenario, FrontendDeveloper is defined as a union type that can only have one of two specific string values: 'SeniorDev' or 'JuniorDev'. 

# Intersection :
Intersection types combine multiple types into one, denoted by the "&" symbol.

1. An intersection type combines the structure of two or more types into a single type. Any variables declared with an intersection type must satisfy all of the constraints imposed by each individual type.
2. Intersection types are commonly used to define objects that need to implement multiple interfaces or extend multiple classes.
3. Intersection types can also be combined with union types to represent complex data structures that may contain values from multiple sources with differing types.

**Example :**

    interface User {
    name: string;
    }

    interface Admin {
    role: string;
    }

    let userAdmin: User & Admin = {
    name: 'John Doe',
    role: 'admin'
    };
In this case, userAdmin has both the properties of User and Admin. This is useful when you want to create an object that needs to conform to multiple interfaces.

**Example :** 

    type FrontendDeveloper = {
    skills: string[],
    designation1: 'FrontendDeveloper'
    }

    type BackendDeveloper = {
    skills: string[],
    designation2: 'BackendDeveloper'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullStackDeveloper : FullStackDeveloper = {
    skills: ['HTML', "Js", "Express"],
    designation1:'FrontendDeveloper',
    designation2:'BackendDeveloper'
    }

In this example, type FrontendDeveloper and type BackendDeveloper intersect to create a new type called FullStackDeveloper. This new type combines all properties from both intersecting types. Therefore, an instance of FullStackDeveloper must include all properties and fields from both FrontendDeveloper and BackendDeveloper.


Mastering union and intersection types can greatly enhance your approach to type safety in TypeScript, leading to more adaptable and resilient applications. By integrating these types into your projects, you’ll find your code becoming both more robust and expressive.