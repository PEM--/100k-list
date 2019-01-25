# 100k-list
Sample project that displays a list of 100k items

## Requirements
Engine: Node 8 v8.15.0 LTS
Packager: Yarn 1.13.0

## Usage
```
# Install dependencies
yarn install
# Development
yarn dev
# Production (build client as express is production ready)
yarn production
# Optional: Generate fake data (pretty long task)
yarn generateData
```

> Default port is configured on `4000` and can be overriden using a `PORT` environment variable. 

⚠️ Node & Yarn must be available on your computer for this script to work.
Please, refer to their installation process depending on your operating system.

## Main packages used
* Production: Express, Apollo, React & React-DOM, Styled-components
* Development: Faker, Webpack

## Completion
### Technologies to use
* [x] Typescript (or Javascript)
  > Typescript on the front, ES2017 on the back
* [x] Node
  > Node 8 LTS
* [x] React
  > Latest release: 16.7.0

### Requirements
* [x] Handles 100,000s of rows.
* [x] Auto-sizes columns based on cell content.
* [x] Generic, re-usable API that abstracts away the underlying implementation.
  > Achieved via Apollo
* [x] Light backend that serves up the data.
  > Achieved via Express & Apollo
* [ ] Allow sorting by clicking on columns.
* [x] No 3rd party data grid library.

## Stretch
* [ ] Resizable / draggable columns.
* [ ] Edit cell content.
* [ ] Ability to delete rows.
* [ ] Tests.