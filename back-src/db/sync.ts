

 import "dotenv/config"
 // import "./view/index";
 import { sequelize } from "./connection";
 import "../model"
 
 sequelize.sync({ force: true }).then((res) => console.log(res));
 
//sequelize.sync({ force: true }).then((res) => console.log(res));
// podemos usar el force si necesitamos resetear la base por completo
// sequelize.sync({ force: true }).then((res) => console.log(res));

