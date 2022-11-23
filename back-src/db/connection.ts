const { Sequelize } = require('sequelize');
const path = 'postgres://ouscgqtf:OV9qJri5bX_RnjzsHiXizLvechTCPEgH@motty.db.elephantsql.com/ouscgqtf';
export const sequelize = new Sequelize(path,{
  dialect: "postgres",
  username: process.env.USERNAME_SEQUALIZE,
  password: process.env.PASSWORD_SEQUELIZE,
  database: "d4liiqmqa0iq1n",
  host: "ec2-52-70-205-234.compute-1.amazonaws.com",
  ssl: true,
  // esto es necesario para que corra correctamente
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}) // Example for postgres

sequelize.authenticate();