setup of webpack & jest. jest docs link to deprecated babel.

toEqual is used for testing of arrays. toBe would only match if it is the same location in memory. toBe or toEqual can be used with primitives, but toBe is specifically useful for reference equality aka. when you want to assert that it is literally the same instance of an object.