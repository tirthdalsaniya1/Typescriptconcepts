export type UserType = {

    name: string;
    id: number;
    email: string;
    age?: number;

};

/*
| Feature                           | `interface` | `type`              | Easy Explanation                                                          |  
| --------------------------------- | ----------- | ----------------    | ------------------------------------------------------------------------- |
| Can describe object shape         | ✅ Yes       | ✅ Yes            | Both can define object structure like `{ name: string, age: number }`.    |
| Can extend (inherit from another) | ✅ Yes       | ✅ Yes (with `&`) | You can reuse and add properties from other interfaces or types.          |
| Can be merged (reopened)          | ✅ Yes       | ❌ No             | Interfaces can be declared multiple times and auto-merged. Types can't.   |
| Can describe primitive/unions     | ❌ No        | ✅ Yes            | Only `type` can define things like \`type Status = 'PASS'                 | 
| Can describe functions            | ❌ Limited   | ✅ Yes            | `type` is better for defining function shapes like `(x: number) => void`. |  


                        Differences: interface vs type
Feature	                    interface	                         type
Extends other interfaces?	✅ Yes	                           ✅ Yes (with &)
Can define union types?	    ❌ No	                           ✅ Yes (`A
Can be merged?	            ✅ Yes (declaration merging)	       ❌ No
Recommended for	            Object shapes, class contracts	     Union/tuple/primitive combinations
*/