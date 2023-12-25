require('dotenv').config();

module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.DB_DEV_PASSWORD,
    "database": "exporing_sequelize_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "postgres",
    "database": "exporing_sequelize_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
};
