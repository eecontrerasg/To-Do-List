# To-Do List

## How to setup

### Database

Go to your Firebase console and create a new project with a database, here is where the collections 'tasks' is going to live.

- Once this is set up, add your application in the console to get the Firebase credentials to add in the .env file of the backend app

### Backend

After creating the database, add a `.env` file with the next structure

```bash
APP_PORT=

API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
```

The recomendation is to add the PORT as 4001

Once the `.env` file is set, just run a `npm run i` and `npm run dev` to install the dependencies and run the project

### Frontend

As mentioned on the previous section, the port here is set strictly to 4001 to make the request

To set up and running this app just install the dependencies and run the clasic `npm start` for a react app
