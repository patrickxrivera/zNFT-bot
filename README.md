# Late Checkout Boilerplate

If you don't have Postgres installed, follow the instructions [here](#install-postgres), first.

## How to update the boilerplate
- Clone the repo and create new branch:

```
git clone git@github.com:latecheckout/backend-boilerplate.git
cd backend-boilerplate
git checkout -b <branch_name>
```

- Next, make your awesome changes
- Then, commit and push

```
git add -A
git commit -m “<your commit message>”
git push origin <branch_name>
```

- Lastly, create a new PR (pull request) in GitHub and either merge or wait for approval 🎉

## Install Postgres

You can either install Postgres using the [Postgres.app](http://postgres.app) Mac client or [Homebrew](https://wiki.postgresql.org/wiki/Homebrew).

I prefer Homebrew because I like running queries in the terminal using the `psql` command line tool. These docs will assume you downloaded Homebrew but feel free to explore the Mac client if you prefer.

Run the following commands to install Postgres using Homebrew and to create the DB:

```bash
# install Postgres
brew install postgresql

# start Postgres locally
brew services start postgresql

# login to the Postgres server (this sets up a single "admin" user with your username, so that's who you'll be logged in as)
psql postgres
```
