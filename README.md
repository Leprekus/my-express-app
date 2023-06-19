# Express App

## Secondary To-Do's

- [ ] set rate limiting
- [ ] set secure http headers
- [ ] implement SSR rendering (good for SEO)

Express is a routing mechanism.
When creating a data entity, express does the following:

1. Handle the route
2. Dispatch an action to handle data entity
3. entity is validated with its respective model
4. Model performs the actual database modification
5. model sends back a response
6. controller (express) returns a response to the client based on model's response
7. 

Backend Development: Start by building the backend infrastructure and APIs that will handle user authentication and token management. This includes creating routes and controllers for user registration, login, and token retrieval.

Token Generation: Implement a mechanism to generate tokens upon successful user authentication. This can be done using libraries like jsonwebtoken in Node.js, where you generate a token with a secret key and include relevant user information.

Token Storage: Decide on a secure storage mechanism for tokens. You can choose to store tokens in a server-side session, in a database, or as HTTP-only cookies. Ensure you handle token storage securely to prevent unauthorized access.

Token Retrieval: Implement an API endpoint for token retrieval, where users can exchange their credentials (e.g., username and password) for a token. Validate the credentials, generate the token, and return it to the client.

Token Rotation: To enhance security, consider implementing token rotation, where a new token is generated periodically or on specific triggers. This helps mitigate the risk of long-lived tokens and adds an extra layer of security.

API Authorization: Implement authorization middleware that verifies the authenticity and validity of tokens for protected routes. This ensures that only authenticated users with valid tokens can access certain APIs or resources.

Frontend Integration: Integrate the token retrieval process into your frontend application. Update your frontend code to send the user's credentials to the backend and retrieve the token upon successful authentication. Store the token securely on the client side (e.g., in local storage or as a cookie) for subsequent API calls.