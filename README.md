# Symfony UX: Stimulus.js

Well hi there! This repository holds the code and script
for the [Symfony UX: Stimulus.js](https://symfonycasts.com/screencast/stimulus) course on SymfonyCasts.

## Setup

**1) Download Composer dependencies**

Make sure you have [Composer installed](https://getcomposer.org/download/)
and then run:

```
composer install
```

You may alternatively need to run `php composer.phar install`, depending
on how you installed Composer.

**2) Database Setup (with Docker)**

The easiest way to set up the database is to use the `docker-compose.yaml`
file that's included in this project. First, make sure Docker is downloaded
and running on your machine. Then, from inside the project, run:

```
docker-compose up -d
```

Congrats! You now have a database running! And as long as you use the
"symfony binary" web server (described below), the `DATABASE_URL`
environment variable will automatically be exposed to your web server:
no need to configure `.env`.

For more information about this approach, see https://symfonycasts.com/screencast/symfony5-doctrine

**2 Alternative) Database Setup (without Docker)**

If you do not want to use Docker, you can also just install and run
MySQL manually. When you're done, open the `.env` file and make any
adjustments you need - specifically `DATABASE_URL`. Or, better,
you can create a `.env.local` file and *override* any configuration
you need there (instead of changing `.env` directly).

**3) Database Schema**

```
symfony console doctrine:database:create
symfony console doctrine:schema:update --force
symfony console doctrine:fixtures:load
```

**4) Start the symfony web server**

```
symfony serve -d
```

(If this is your first time using this command, you may see an
error that you need to run `symfony server:ca:install` first).

Now check out the site at `https://localhost:8000`. Enjoy!

**5) Install webpack encore**
```
composer require encore
npm install --save @babel/plugin-proposal-class-properties
yarn install
yarn watch
yarn add bootstrap$$]
```
