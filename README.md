# Skeleton for Backbone.Marionette based application

This simple application includes Backbone.js/Marionette.js frameworks and grunt/bower technologies.

## NPM Modules:
    "grunt": "~0.4.5",
    "grunt-contrib-requirejs": "~0.4.4",
    "grunt-contrib-watch": "~0.5.3",
    "grunt-contrib-coffee": "~0.7.0",
    "grunt-contrib-copy": "~0.5.0",
    "grunt-contrib-connect": "~0.6.0",
    "grunt-contrib-symlink": "~0.3.0",
    "grunt-contrib-clean": "~0.5.0",
    "grunt-contrib-jade": "~0.9.1",
    "grunt-contrib-stylus": "~0.12.0",
    "grunt-contrib-cssmin": "~0.8.0",
    "grunt-coffeelint": "~0.0.10",
    "grunt-connect-proxy": "~0.1.10",
    "grunt-easymock": "~0.1.0",
    "grunt-jsonlint": "~1.0.4",
    "grunt-concurrent": "~0.4.3",
    "grunt-shell": "~0.6.4",
    "grunt-notify": "~0.2.20",
    "grunt-karma": "~0.8.3",
    "load-grunt-config": "~0.7.2",
    "requirejs": "~2.1.14",
    "http-rewrite-middleware": "~0.1.6",
    "karma": "~0.12.16",
    "karma-mocha": "~0.1.4",
    "karma-chai": "~0.1.0",
    "karma-sinon": "~1.0.3",
    "karma-chrome-launcher": "~0.1.4",
    "karma-phantomjs-launcher": "~0.1.4",
    "karma-requirejs": "~0.2.2",
    "karma-coffee-preprocessor": "~0.2.1"

## Libraries:
    "jquery": "~2.1.1",
    "marionette": "~2.0.2",
    "requirejs": "~2.1.14",
    "bootstrap": "~3.2.0",
    "almond": "~0.2.9",
    "backbone-route-filter": "~0.1.1",
    "backbone.stickit": "~0.8.0",
    "backbone-validation": "~0.9.1"

## Install
### OSX

* Install Node.js

    `brew install node`

### Ubuntu 12.04

* Install Node.js and Npm

    `sudo add-apt-repository ppa:richarvey/nodejs`
    `sudo apt-get update && sudo apt-get install nodejs npm`

* Configure Npm path (for avoid _sudo_ usage for installing modules)

    `npm config set prefix ~/npm`

    `echo "PATH=\$PATH:\$HOME/npm/bin" | tee -a ~/.zshrc` # for zsh shell

Install Grunt CLI

    npm install -g grunt-cli

Install Bower

    npm install -g bower

## Quick start

Clone application as new project with original repository named "backbone-base"

    git clone git@github.com:fs/backbone-base.git

Create your new repo on GitHub and push master into it.
Make sure master branch is tracking origin repo.

    git remote add origin git@github.com:[MY-GITHUB-ACCOUNT]/[MY-NEW-PROJECT].git
    git push -u origin master

Run bootstrap scripts

    npm install

Run app

    grunt

Start to use application on browser:

    localhost:8000

## Tasks

Build for development

    grunt development

Build for production

    grunt production

Run tests

    grunt test

## Credits

Backbone Base is maintained by [Anton Gudkov](http://github.com/antongudkov).
It was written by [Flatstack](http://www.flatstack.com) with the help of our
[contributors](http://github.com/fs/backbone-base/contributors).


[![Flatstack](http://www.flatstack.com/assets/images/logo.png)](http://www.flatstack.com)
