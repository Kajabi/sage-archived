# Sage

The Sage Design System (SDS) is our single source of truth, providing everything you need to build great products for our customers. It is the culmination of designers and developers working together to give teams the ability to ship high-quality products faster.

This repo contains the Sage documentation site and the SDS as a webpack-compatible frontend package and rails engine located within `./lib/..`.

![image](https://user-images.githubusercontent.com/565743/83690086-b0acce00-a5b5-11ea-90f5-9b8e8b0bd337.png)


## Sage Development

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
$ yarn serve
```

Additional scripts live within `./package.json` and can be run in the console using `yarn <COMMAND NAME>`.

Happy development!

## Kajabi Products Development

### Getting Started

To link your _local_ Sage repo's assets within Kajabi-Products we have a shell script that automates this process.

```bash
# Run the Sage script within the root of your local Kajabi-Products repo.
# For example if the Kajabi-Products and Sage repos locally are sibling directories:
# $ ../bin/sage-local-link.sh true

$ <RELATIVE PATH TO SAGE REPO/bin/sage-local-link.sh <BOOLEAN>
```
The script requires a boolean argument designating whether to setup or tear down the link to your local Sage repo. This is an automation of `yarn link`, you can do this process manually as well. [See the yarn docs for more details.](https://classic.yarnpkg.com/en/docs/cli/link/)

### Run Locally

Within Kajabi-Products, run the project as you normally would and in tandom also run Kajabi-Products' webpack-dev-server.
```bash
$ bin/webpack-dev-server
```
In order for Kajabi-Products to watch changes within your local Sage repo webpack development server needs to be running.


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

### Rails Engine

---

**NOTE:** The Rails engine is not being currently used within Kajabi-Products at this moment. The design syste ruby classes (`SageComponent`) live within the main app until they're more mature.

---

To install this gem for use in an application add this line to your application's Gemfile:

```ruby
gem 'sage', git: 'https://github.com/Kajabi/sage.git'
```


## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
