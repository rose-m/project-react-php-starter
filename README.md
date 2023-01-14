# Template

1. Update the following files with basic non-template content

- `package.json`
- `scripting/composer.json`
- `db/schema.sql`
- `index.html`

2. Create a `.server.env` file with the following content (replace template with project name):
   ```
   DEVELOPMENT=true
   DB_HOST=127.0.0.1
   DB_NAME=template
   DB_USER=root
   DB_PASSWORD=rootpassword
   ```
3. Prepare the project:

```
yarn install && cd scripting && composer install
```

To start everything run `yarn dev`.

The backend expects a MySQL database to talk to (if DB is wanted). To start one matching the credentials above use docker:

```
docker run --name mysql-template -p 3306:3306 -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=template -d mysql:8.0
```
