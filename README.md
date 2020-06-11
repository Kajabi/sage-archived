# Sage Design System

The Sage Design System (SDS) is our single source of truth, providing everything you need to build great products for our customers. It is the culmination of designers and developers working together to give teams the ability to ship high-quality products faster.

This repo contains the Sage documentation site and the SDS as a webpack-compatible frontend package and rails engine located within `./lib/..`.

![image](https://user-images.githubusercontent.com/565743/83690086-b0acce00-a5b5-11ea-90f5-9b8e8b0bd337.png)


## Local Development: Sage

### Getting Started

Install the dependancies.

```bash
$ yarn install
```
```bash
$ bundle
```

### Run Locally

Run the rails & webpack development servers in tandom.
```bash
$ yarn start
```

Additional scripts live within `./package.json` and can be run in the console using `yarn <COMMAND NAME>`.

The documentation site can be accessed at [`http://localhost:4000`](http://localhost:4000/). Happy development!


## Local Development: Kajabi-Products

### Getting Started

To link your _local_ Sage repo's assets within Kajabi-Products we have a shell script that automates this process.

```bash
# IMPORTANT! Run the Sage script within the root of your local Kajabi-Products repo not the Sage repo.

$ <RELATIVE PATH TO SAGE REPO>/bin/sage-local-link.sh <BOOLEAN>


# For example if the Kajabi-Products and Sage repos are sibling directories:
# $ ../sage/bin/sage-local-link.sh true
```

The script requires a boolean argument designating whether to setup or tear down the link to your local Sage repo. This is an automation of `yarn link`, you can do this process manually as well. [See the yarn docs for more details.](https://classic.yarnpkg.com/en/docs/cli/link/)

### Run Locally

Within Kajabi-Products, run the project as you normally would and in tandom also run Kajabi-Products' webpack-dev-server. In order for Kajabi-Products to watch changes within your local Sage repo webpack-dev-server needs to be running.
```bash
# Run Kajabi-Products
$ heroku local

# Run Kajabi-Products' webpack-dev-server
$ bin/webpack-dev-server
```

It's reccomended to run the Sage documentation site in tandom with Kajabi-Products. The documentation site is hosted through port `4000` to avoid conflicts with Kajabi-Products' use of the `30XX` range.

## Deploying Sage
### Cut A New Version Of Sage
The Sage version is set via the `./package.json` version.

It is reccomended to use the [`yarn version`](https://classic.yarnpkg.com/en/docs/cli/version/) command for this because it also handles tagging the git commit.

### Update Kajabi-Products To The Latest Sage Version
Our main app is updated by pulling setting a version-tagged commit from the Kajabi/Sage master branch as the source for the Sage frontend dependancy.

This can be done using:
```bash
# Example: yarn upgrade sage@git://github.com/Kajabi/sage.git#0.17.0
$ yarn upgrade sage@git://github.com/Kajabi/sage.git#<GIT VERSION TAG>
```

Keep in mind that this version bump should be made in a standalone Kajabi-Products PR with **all specs passing**.

The PR should _only_ include a diff of `package.json` & `yarn.lock`.

## Installation
### Frontend Package
Add the frontend package to your `package.json`.
```bash
$ yarn add git://github.com/Kajabi/sage.git
```

Exclude the Sage package from being ignored in your webpack development server.
```yml
# Within webpacker.yml

development:
  <<: *default
    watch_options:
      ignored: '[/node_modules([\\]+|\/)+(?!sage)/]'

```

## Rails Engine Implementation
**NOTE:** While the Sage Rails engine exists within this repo it is currently not consumed by Kajabi-Products. The design system ruby classes (`SageComponent`) that exist in Kajabi-Products are intended to live within the Sage Rails engine once they mature. Currently the Sage Rails engine is an empty app.


## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
