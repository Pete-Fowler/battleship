setup of webpack & jest. jest docs link to deprecated babel.

toEqual is used for testing of arrays. toBe would only match if it is the same location in memory. toBe or toEqual can be used with primitives, but toBe is specifically useful for reference equality aka. when you want to assert that it is literally the same instance of an object.

Array.prototype.fill() with object passes reference and not new instance
The contents of the first fill is only evaluating once - creating the second array, and then it is duplicating that array 7 times, so they are all connected.

Cannot compare 2 arrays??? Used JSON.stringify() on arrays in the AI adjacent shot function.

Feel like the code could always be better organized, with more SRP and SOLID. The AI attack seemed especially messy. I would have moved the AI attack logic to a separate module, but had already written tests and did not want to rewrite everything if I didn't have to.

return inside forEach does not return from overall function, only from lambda inside foreach, skipping one item. https://stackoverflow.com/questions/68322439/returnforeach-does-not-seem-to-exit-foreach

