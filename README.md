# Express.js, TypeScript Demo

This is a personal practice project for experimenting with Express.js and TypeScript.

> Please note that this demo **doesn't use a database**. Instead, it loads sample data from a JSON file when the server starts. The project includes a model class that performs CRUD operations on this data.

## Table of content

<!-- TOC -->

- [Express.js, TypeScript Demo](#expressjs-typescript-demo)
  - [Table of content](#table-of-content)
  - [Getting started](#getting-started)
    - [Clone the repository](#clone-the-repository)
    - [Install dependencies](#install-dependencies)
    - [Start the Server](#start-the-server)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)

<!-- /TOC -->
<!-- /TOC -->

## Getting started

### Clone the repository

```bash
 git clone <repository-url>
 cd posts-api-demo
```

**[&uarr; Top](#table-of-content)**

### Install dependencies

```bash
npm install
```

**[&uarr; Top](#table-of-content)**

### Start the Server

To start server run this command:

**[&uarr; Top](#table-of-content)**

```bash
npm run start
```

**[&uarr; Top](#table-of-content)**

## Usage

- Use your preferred API client (e.g., Postman, curl) to interact with the API.
- Alternatively, you can use the REST Client extension in Visual Studio Code to test the API directly from the provided [posts.http](./http/posts.http) file. The rest.http file contains URLs to all endpoints, making it convenient to make requests and test your API.

**[&uarr; Top](#table-of-content)**

## API Endpoints

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `POST /api/posts` - Create a new post
- `PATCH /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

**_Enjoy the demo!_**
