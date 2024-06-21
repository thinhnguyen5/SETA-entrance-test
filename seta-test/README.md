I. Javascript algorithm
    1. Provide an array of strings, eg: [‘a’, ‘ab’, ‘abc’, ‘cd’, ‘def, ‘gh’]. Write a function to find the strings’ length that appear most in this array. Writing the unit test function and provide some test-cases. The result for example array is [‘ab’, ‘cd’, ‘gh’]
        + Find the solution in the Ex1.js file in the Javascript algorithm folder.
        + Sort the array from smallest to largest based on element length.
        + Count is initialized to 1 to keep track of the occurrence of the current longest string length. Len is initialized to the length of the first element in the sorted array, representing the current longest string length seen so far. Best_count is initialized to 1 to store the maximum occurrence of any string length encountered. Best_len is initialized to len to store the length corresponding to best_count.
        + Then I use two loops, the first one to find the strings' length that appears most in this array and the best count the this string' length.
        + Use the loop one more time, for each element, if its length is equal to the best_len, it pushes that element into the result array.
    2. Provide an array of integers, eg: [1, 4, 2, 3, 5]. Write a function to find sum of integers on top 2. Writing the unit test function and provide some test-cases The result for the example array is 9
        + Find the solution in the Ex2.js file in the Javascript algorithm folder.
        + Create the function sumOfTop2BiggestNumber to return the sum of the two largest numbers, create num1 and num2 assigned to the first 2 values ​​of the array respectively, then run a loop to find those 2 numbers
II. React
    Provide the API for posts: https://jsonplaceholder.typicode.com/posts
    Writing a react-redux app that:
    - Get and display posts from API
        + Using useEffect hook to fetch data from the provided URL using the Fetch API.
        + After that, it processes the response from the fetch. It checks the response status and then parses the response body into JSON format. It then sets the state of user with the fetched data (data). 
        + Then use the ul and li tags to display information in the posts.
    - Have a PostForm component to add new post
        + First, create a form with 3 input boxes including userId, title, and body to help create a new post.
        + Defines an arrow function named handleSubmit that takes a single argument e.
        + Using Axios for making HTTP requests, it performs a POST request to the specified url. After that, it extracts form data using e.target, these values are then assigned to properties named userId, title, and body in the request body object.
        + .then((res) => { ... }) This part handles the successful response from the API after the POST request is sent, res represents the response object from the Axios request.
        + setUser((previous) => { ... }): This utilizes the useState hook's setter function to update the user state, the provided function takes the previous state (previous) as an argument. It returns a new array using the spread operator (...) to combine the previous state (previous) with the data (res.data) received from the successful response.