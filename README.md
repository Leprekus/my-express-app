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

## Backend To-Do's

1. Define models
2. Create Methods to Perform CRUD Ops in models
3. Data should be stored as JSON

json structure:

```json
   user {
       "username": "string",
       "name": "string",
       "bio": "string",
       "profile picture": "id",
       "posts": ["id", "id", "id", ],
       "friends": ["id", "id", "id", ]
   }
```

File Structure:

```text
    userId
    |---user.json
    |---profilePicture.png
    |---posts/id.png
   ```

Authentication:

* client sends credentials to backend
* backend checks credentials and returns token
* client can make seubsequent requests appending the token

* requests that do not rqeuire authorization need client credentials to add layer of security

Debugging:

* Make sure to use '?' to check for possibly undefined operators, otherwise there is no error thrown
