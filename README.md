Strapi + West Health  

## How To Get Started With The Project

1. Clone the repository locally:

<!-- ```bash
  git clone https://github.com/strapi/nextjs-corporate-starter.git
    or
  gh repo clone strapi/nextjs-corporate-starter
``` -->

2. Run `setup` command to setup frontend and backend dependencies:

```bash
  yarn setup
```

3. Next, navigate to your `/frontend` directory and set up your `.env` file. You can use the `.env.example` file as reference:

```bash
  STRAPI_URL=http://localhost:1337
```

3. Next, navigate to your `/backend` directory and set up your `.env` file. You can use the `.env.example` file as reference:

```bash
HOST=localhost
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

5. Next, navigate to your `/backend` and start your project by running the following command:

```bash
  yarn build
  yarn develop
```

You will be prompted to create your first admin user.

![admin-user](https://user-images.githubusercontent.com/6153188/231865420-5f03a90f-b893-4057-9634-9632920a7d97.gif)

Great. You now have your Strap project running. Let's add some data.

## Seeding The Data

We are going to use our DEITS feature which will alow to easily import data into your project.

You can learn more about it in our documentation [here](https://docs.strapi.io/dev-docs/data-management).

In the root of our project we have our `seed-data.tar.gz` file. We will use it to seed our data.

1. Open up your terminal and make sure you are still in you `root` of your project folder.

2. Run the following command to seed your data:

```bash
  yarn seed
```

![after-import](https://user-images.githubusercontent.com/6153188/231865491-05cb5818-a0d0-49ce-807e-a879f7e3070c.gif)

This will import your data locally. 

Log back into your admin panel to see the newly imported data.

## Starting Both Projects

You can start each project individually, by running the following commands.

In your terminal, change directory to `backend` and run `yarn develop`, then in a new terminal window, change directory to `frontend` and run `yarn dev`.

Navigate to `http://localhost:3000` and should see the following screen.
You can find your Strapi app running on `http://localhost:1337`.

You can also run both projects using **concurrently* to start both projects by running `yarn dev` in the root of your project.

You can checkout the scripts inside the `package.json` file in the root of your project.

``` json
{
  "scripts": {
    "frontend": "yarn dev --prefix ../frontend/",
    "backend": "yarn dev --prefix ../backend/",
    "clear": "cd frontend && rm -rf .next && rm -rf cache",
    "setup:frontend": "cd frontend && yarn",
    "setup:backend": "cd backend && yarn",
    "setup": "yarn install && yarn setup:frontend && yarn setup:backend",
    "dev": "yarn clear && concurrently \"cd frontend && yarn dev\" \"cd backend && yarn develop\"",
    "seed": "cd backend && yarn strapi import -f ../seed-data.tar.gz",
    "export": "cd backend && yarn strapi export --no-encrypt -f ../seed-data",
    "repo:upstream": "git fetch upstream && git merge upstream/main"
  },
  "dependencies": {
    "concurrently": "^8.2.2"
  }
}

```

## Starting Both Projects

You can start each project individually by running the following commands.

In your terminal, change the directory to `backend` and run `yarn develop,` then, in a new terminal window, change the directory to `frontend` and run `yarn dev.`

Navigate to `http://localhost:3000` and should see the following screen.
You can find your Strapi app running on `http://localhost:1337`.

You can also run both projects using **concurrently* to start both projects by running `yarn dev` at the root of your project.

You can check out the scripts inside the `package.json` file at the root of your project.

``` json
{
  "scripts": {
    "frontend": "yarn dev --prefix ../frontend/",
    "backend": "yarn dev --prefix ../backend/",
    "clear": "cd frontend && rm -rf .next && rm -rf cache",
    "setup:frontend": "cd frontend && yarn",
    "setup:backend": "cd backend && yarn",
    "setup": "yarn install && yarn setup:frontend && yarn setup:backend",
    "dev": "yarn clear && concurrently \"cd frontend && yarn dev\" \"cd backend && yarn develop\"",
    "seed": "cd backend && yarn strapi import -f ../seed-data.tar.gz",
    "export": "cd backend && yarn strapi export --no-encrypt -f ../seed-data",
    "repo:upstream": "git fetch upstream && git merge upstream/main"
  },
  "dependencies": {
    "concurrently": "^8.2.2"
  }
}

```

Nice, we now have our project running.  Thank you for the support, and enjoy.  Show your support by giving us a star and sharing the repo.
