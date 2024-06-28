# SETA entrance test

## I. Javascript algorithm

1. Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to find the strings’ length that appear most in this array. Writing the unit test function and provide some test-cases. The result for example array is [‘ab’, ‘cd’, ‘gh’]

+ Find the solution in the Ex1.js file in the Javascript algorithm folder.
+ const len = str.length retrieves the current string's length.
+ The code utilizes a Map named map. Maps are efficient for key-value storage. Here, the key is the string length (len) and the value is the frequency of that length encountered.
+ map.set(len, (map.get(len) || 0) + 1) is a concise way to update the frequency in the map.
+ map.get(len) retrieves the existing count for the current length (len). If it doesn't exist yet,(||) ensures a default value of 0. The retrieved or default value is incremented by 1 (+ 1) to represent the increased frequency.
+ The retrieved or default value is incremented by 1 (+ 1) to represent the increased frequency.
+ for (const [len, count] of map.entries()) iterates through the map using destructuring assignment. This efficiently retrieves both the key (len) and value (count) from each key-value pair in the map.
+ if (count > bestCount) checks if the current frequency (count) is greater than the bestCount. If yes, bestCount and bestLen are updated with the current values, effectively tracking the most frequent length and its count.


2. Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of integers on top 2. Writing the unit test function and provide some test-cases The result for the example array is 9

+ Find the solution in the Ex2.js file in the Javascript algorithm folder.
+ Create the function sumOfTop2BiggestNumber to return the sum of the two largest numbers, create num1 and num2 assigned to the first 2 values ​​of the array respectively, then run a loop to find those 2 numbers

## II. React

Provide the API for posts: https://jsonplaceholder.typicode.com/posts
Writing a react-redux app that:
### Get and display posts from API
+ Using useEffect hook to fetch data from the provided URL using the Fetch API.
+ After that, it processes the response from the fetch. It checks the response status and then parses the response body into JSON format. It then sets the state of user with the fetched data (data). 
+ Then use the ul and li tags to display information in the posts.

### Have a PostForm component to add new post
+ First, create a form with 3 input boxes including userId, title, and body to help create a new post.
+ Defines an arrow function named handleSubmit that takes a single argument e.
+ Using Axios for making HTTP requests, it performs a POST request to the specified url. After that, it extracts form data using e.target, these values are then assigned to properties named userId, title, and body in the request body object.
+ setUser((previous) => { ... }): This utilizes the useState hook's setter function to update the user state, the provided function takes the previous state (previous) as an argument. It returns a new array using the spread operator (...) to combine the previous state (previous) with the data (res.data) received from the successful response.
