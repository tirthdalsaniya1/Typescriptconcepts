export type UserType = {

    name: string;
    id: number;
    email: string;
    age?: number;

};

/*
| Feature                        | `interface`  | `type`         |
| ------------------------------ | -----------  | -------------  |
| Can describe object structure  | ✅ Yes       | ✅ Yes        |
| Can extend another             | ✅ Yes       | ✅ (with `&`) |
| Can be merged (reopened)       | ✅ Yes       | ❌ No         |
| Can describe primitives/unions | ❌ No        | ✅ Yes        |
| Can describe functions         | ❌ Limited   | ✅ Yes        |
*/