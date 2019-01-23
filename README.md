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
yarn dev.client
yarn dev.server
# Production (build client)
yarn production
# Optional: Generate fake data (pretty long task)
yarn generateData
```

⚠️ Node & Yarn must be available on your computer for this script to work.
Please, refer to their installation process depending on your operating system.

## Main packages used
* Production: Express, Apollo, React & React-DOM, Styled-components
* Development: Faker, Webpack
