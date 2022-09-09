<a href='https://pete-fowler.github.io/battleship/'>Live page</a>

This is a Battleship game where the user plays against an AI opponent. It was built with vanilla Javascript/CSS/HTML, plus Jest and Webpack. It was built to work on a mobile device, with vibration effects for Android (not possible for iPhones), and a responsive design using relative sizing units and a media query to reflow the layout at a narrow screen width. The goal of this project was to closely follow a test driven development workflow.

I really enjoyed this workflow - write a test, make it pass. It was very helpful to force myself to do what developers should do - focus on one specific subproblem at a time, and think about the end result and how you will get there prior to slamming down some code and hoping for the best.

Challenges included a setting up setup Webpack and Jest to work together and use ES6 modules from scratch without any framework. The Jest docs linked to some outdated and incorrect information, and it took some time and significant persistence to get this working. 

I learned that in Jest, toEqual is used for testing of arrays. Its toBe would only match if the array were the same location in memory. Both toBe or toEqual can be used with primitives, but toBe is specifically useful for reference equality, AKA when you want to assert that it is literally the same instance of an object.

Using Array.prototype.fill() with an object such as another array passes reference and not a new instance. The contents of the first fill only evaluate once - creating the second array, and then it is duplicating that array 7 times, so they are all connected.

I learned to use JSON.stringify() to compare the content of arrays in the AI adjacent shot function. However, I realize this is probably not the best method, and a recursive comparison such as in the Lodash library would be better, since JSON.stringify() can fail in some edge cases (such as if it contains null or undefined), and it is dependent on the implementation of the method not changing.

It seems like the code could always be better organized, with some functions more closely following the single responsibility principle. The AI attack seemed especially messy. If doing this again, I would at a minimum move the AI attack logic to a separate module, and would separate the AI and human branches out of a single attack function into two in the player module. 

Background image (Creative Commons License): https://pxhere.com/en/photo/1360845?utm_content=shareClip&utm_medium=referral&utm_source=pxhere
