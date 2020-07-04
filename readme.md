<h1 align="center">Ecoleta - Server</h1>

<p align="center">
    Ecoleta is a marketplace of waste collection. Its purpuse is to connect the collecting's companies and their clients in a more efficient way.
    This project was developed during the <a href="https://rocketseat.com.br/">Rocketseat Next Level Week Bootcamp</a>.
</p>

## Development

To start the development follow the steps:

1. run ``npm install`` or ``yarn`` (if you use yarn as your package manager).
2. run ``npm run knex:migrate`` or ``yarn knex:migrate`` to run the migrations.
3. run ``npm run knex:seed`` or ``yarn knex:seed`` to start the seeds.
4. run `npm run dev` or `yarn dev` to start the development server.

## Information

<p>By default when you run the knex migrate it's gonna create a Sqlite database in <code>server/src/database/database.sqlite</code>.</p>
<p>If you wish to change to another SQL database, then you have to change the configurations to Knex in the <code>knexfile.ts</code> using the <a href="http://knexjs.org/#Installation-client">KnexJS Official Documentation</a>.</p>

## Routes

##### `POST - /points - Register a point.`

##### Request Parameters (*using TypeScript interface syntax*).

```
formData: {
    name: string;
    email: string;
    whatsapp: string;
    latitude: number;
    longitude: number;
    city: string;
    uf: string;
    items: string;
    image: Image;
}
```

##### Response Codes

| Code | Description | Return |
| ----- | ---------- | -------|
| 200 | Success | Registered points with the ID
| 400 | Bad Request | Error message showing the parameter errors |

##### `GET - /points - Take all points registered filtered by queryParams.`

##### Request Parameters (*using TypeScript interface syntax*).

```
queryParams: {
    city: string;
    uf: string;
    items: string;
}
```

##### Response Codes

| Code | Description | Return |
| ----- | ---------- | -------|
| 200 | Success | Array with all the filtered points
| 400 | Bad Request | Error message showing which parameters are missing | 

##### `GET - /points/:id - Take a point filtered by id.`

##### Response Codes

| Code | Description | Return |
| ----- | ---------- | -------|
| 200 | Success | The point filtered by the id.
| 400 | Bad Request | Error message showing that id is missing. |

##### `GET - /items - Take all items registered.`

##### Response Codes

| Code | Description | Return |
| ----- | ---------- | -------|
| 200 | Success | Array with all the items

## Tecnologies

This project is developed with the following technologies:

- TypeScript
- Express
- Knex ORM
- Multer
- Axios
- Celebrate

## Social Media

If you want to ask something, please contact me on my social media.

* **Instagram** - [@pajebr](https://www.instagram.com/pajebr/)
* **Linkedin** -  [josephdsbr](https://www.linkedin.com/in/josephdsbr)
* **GitHub** - [josephdsbr](https://github.com/josephdsbr)

Made with <3 by **José Vinícius**