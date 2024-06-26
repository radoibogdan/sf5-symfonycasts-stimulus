# Symfony UX: Stimulus.js

Well hi there! This repository holds the code and script
for the [Symfony UX: Stimulus.js](https://symfonycasts.com/screencast/stimulus) course on SymfonyCasts.

## Setup

## 1) Download Composer dependencies

Make sure you have [Composer installed](https://getcomposer.org/download/)
and then run:

```
composer install
```

You may alternatively need to run `php composer.phar install`, depending
on how you installed Composer.

## 2) Database Setup (with Docker)

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

## 2 Alternative) Database Setup (without Docker)

If you do not want to use Docker, you can also just install and run
MySQL manually. When you're done, open the `.env` file and make any
adjustments you need - specifically `DATABASE_URL`. Or, better,
you can create a `.env.local` file and *override* any configuration
you need there (instead of changing `.env` directly).

## 3) Database Schema

```
symfony console doctrine:database:create
symfony console doctrine:schema:update --force
symfony console doctrine:fixtures:load
```

## 4) Start the symfony web server

```
symfony serve -d
```

(If this is your first time using this command, you may see an
error that you need to run `symfony server:ca:install` first).

Now check out the site at `https://localhost:8000`. Enjoy!

## 5) Install webpack encore
```
composer require encore
npm install --save @babel/plugin-proposal-class-properties
yarn install
yarn watch
yarn add bootstrap$$]
```
## 6) Install Stimulus use  
[Stimulus 2 docs][1]  
[Stimulus Website examples][2]  
React to javascript event.
In our case, detect click outside (useClickOutside) of search preview so as to close the search preview
```
yarn add stimulus-use@0.41.0 stimulus@2.0.0
```

## 7) Install Sweetalert 2 - Modal  
[Sweetalert 2 docs][3]
```
yarn add sweetalert2
```

## *7) Install UX-Charts(javascript + symfony library)  
[UX chartsjs - GitHub][4]  
[UX chartsjs - Symfony][5]
```
composer require symfony/ux-chartjs:1.2.0
yarn install --force
```
Use Ux charts here
https://127.0.0.1:8000/admin

## 8) Install React
```
yarn add @babel/preset-react@^7.0.0 --dev
yarn add react react-dom --dev
```

## 9) Analyze js files with Webpack Bundle Analyzer  
Generate stats file IN TERMINAL (not POWERSHELL)
```
production: yarn run --silent build --json > stats.json
developement: yarn run --silent dev --json > lazy-test.json
```
Install library to read stats file and use library
```
yarn add webpack-bundle-analyzer --dev
yarn webpack-bundle-analyzer stats.json public/build
```
Go to http://127.0.0.1:8888/

## 10) Create CRUD for Product
url : https://127.0.0.1:8000/admin/product/  
Install bootstrap5, popperjs, jquery + create CRUD via maker
```
yarn add bootstrap@5 --dev
yarn add @popperjs/core --dev
yarn add jquery --dev
php bin/console make:crud
```

## 11) Install stimulus-autocomplete
[Yarn][6] [Github][7]  
Other 3rd party controllers: [Stimulus-components][8]  
Other resources : [Better Stimulus][9]

```
yarn add stimulus-autocomplete
```
----------------------------------------------------------------------
[1]:https://github.com/stimulus-use/stimulus-use
[2]:https://stimulus-use.github.io/stimulus-use/#/
[3]:https://sweetalert2.github.io/
[4]:https://github.com/symfony/ux-chartjs
[5]:https://symfony.com/bundles/ux-chartjs/current/index.html
[6]:https://yarnpkg.com/package?q=stimulus%20aut&name=stimulus-autocomplete
[7]:https://github.com/afcapel/stimulus-autocomplete
[8]:https://www.stimulus-components.com/docs
[9]:https://www.betterstimulus.com/
