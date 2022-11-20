# Justly

## Steps to run the project:

1. Clone the repository
2. cd into the db folder
3. Run `docker-compose up -d`
4. cd into the server folder
5. Run `yarn`
6. Run `npx prisma db push` and overwrite anything if it complains
7. Run `yarn populatedb`
8. Run `yarn dev` and keep it running
9. Open a new terminal
10. cd into the web folder
11. Run `yarn`
12. Run `yarn start` and keep it running