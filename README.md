# Nest-csv-generator

The backend application for generating CEA and CTA files.

# Annotate csv files

## Step 1: clone the project

```bash
git clone https://github.com/ngimdock/nest-csv-annotation.git
```

## Install dependencies

```bash
yarn install
```

## Start the application

```bash
yarn start:dev
```

## Upload some csv files

Use and API test aplication like postman to upload some csv files and the program should annotate it.

Make a `POST` request to this endpoint with some images.

```bash
http://localhost:5000/annotation
```
