# NYC GeoSearch API Documentation

[geosearch.planninglabs.nyc](https://geosearch.planninglabs.nyc/)

NYC GeoSearch is an API that transforms input text — such as an address, or the name of a place — to a location in New York City using authoritative NYC address data from the [Property Address Directory (PAD)](https://www1.nyc.gov/site/planning/data-maps/open-data.page#pad) via [Pelias](https://github.com/pelias/pelias) (a modular, open-source geocoder built on top of ElasticSearch for fast geocoding). NYC GeoSearch powers the autocomplete/typeahead search results in web apps such as [ZoLa](https://github.com/NYCPlanning/labs-zola) and [Population Fact Finder](https://github.com/NYCPlanning/labs-nyc-factfinder). 

## How you can help

In the spirit of free software, everyone is encouraged to help improve this project.  Here are some ways you can contribute.

- Comment on or clarify [issues](link to issues)
- Report [bugs](link to bugs)
- Suggest new features
- Write or edit documentation
- Write code (no patch is too small)
  - Fix typos
  - Add comments
  - Clean up code
  - Add new features

**[Read more about contributing.](CONTRIBUTING.md)**

## Requirements

You will need the following things properly installed on your computer.

* **[Git](https://git-scm.com/)**
* **[Node.js](https://nodejs.org/)** (with NPM)
* **[gatsby-cli](https://www.npmjs.com/package/gatsby-cli)** (to run [Gatsby](https://www.gatsbyjs.org/) commands)
* **[Yarn](https://yarnpkg.com/)**

## Local development

- Clone this repo `git clone git@github.com:NYCPlanning/labs-nyc-geosearch-docs.git`
- Navigate to the project directory `cd labs-nyc-geosearch-docs`
- Run `yarn` to install dependencies
- `gatsby develop` — Gatsby will start a hot-reloading development environment accessible at `localhost:8000`. Edit the javascript pages in src/pages. Saved changes will live reload in the browser.
- `gatsby build` — Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
- `gatsby serve` — Gatsby starts a local HTML server for testing your built site.

## Backend services

- **NYC GeoSearch** ([insert API URL here])

## Deployment

This project can be deployed on any static web server.

- Deploy via Dokku using `npm run deploy`

## Contact us

You can find us on Twitter at [@nycplanninglabs](https://twitter.com/nycplanninglabs), or comment on issues and we'll follow up as soon as we can. If you'd like to send an email, use [labs_dl@planning.nyc.gov](mailto:labs_dl@planning.nyc.gov)
