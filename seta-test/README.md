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