# NBC IoC Library Code Test

Write a simple IoC library in either TypeScript or JavaScript. We are not looking for a feature-complete solution - for example, it is okay to support only transient objects and classes (no constants, functions and other types).You will not be evaluated based on the number of features you implement; instead, we are interested to see where you place your priorities when time is limited, and what you do when you know bits are missing, such as support for circular dependencies.

We recommend scoping yourself to around two hours, as this best allows you to showcase the choices you make. Your solution should exemplify what you value in a good library that can actively be used by other projects, and further developed by a team (which could include junior developers).

We are interested to see:

- The steps you take to make the library great to use
- How you set up the code for further collaborative development
- Your approach to testing
- How you deal with feature gaps and edge cases


# POST MORTEM NOTES:

Future revisions:
- I could check for circular dependencies tracking whether an item is being resolved in a separate cache / data set. 
- If the item is already being resolved, we have a circular dependency, so throw an error
- Otherwise add the item to the set of items being resolved
- Get the item from the map
- If the item is not found, throw an error
- Remove the item from the set of items being resolved
- Return the resolved item

Building out the call signature to be more extensible
- Type checking for obj argument, and allow for factory to be passed in for creation of more complex methods with multiple dependencies
- Acceptance of multiple depencies in an array 
