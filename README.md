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
