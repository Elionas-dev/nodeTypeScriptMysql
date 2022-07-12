import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('classicmodels', 'root', 'elionas137', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    freezeTableName: true,
    timestamps: false
  },
  logging: false
});

  



