const port = '5000';
const app = require('./app')
const connectToDatabase = require('./dbConnection')


connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database. Exiting...');
    process.exit(1); // Exit the process with an error code
  });

