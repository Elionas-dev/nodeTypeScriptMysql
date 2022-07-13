import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../server';
import Customers from './CustomersModel';

interface OrdersAttributes {

  orderNumber: number;
  orderDate: string;
  requiredDate: string;
  shippedDate: string;
  status: string;
  comments: string;
  customerNumber: number;
 

};

export interface OrdersInput extends Optional<OrdersAttributes, 'orderNumber'> {};
export interface OrdersOutput extends Required<OrdersAttributes>{};

class Orders extends Model<OrdersAttributes, OrdersInput> {
  declare orderNumber: number;
  declare orderDate: string;
  declare requiredDate: string;
  declare shippedDate: string;
  declare status: string;
  declare comments: string;
  declare customerNumber: number;

};

Orders.init({
  orderNumber: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
  orderDate: {type: DataTypes.DATE, allowNull: false},
  requiredDate: {type: DataTypes.DATE, allowNull: false},
  shippedDate: {type: DataTypes.DATE},
  status: {type: DataTypes.STRING(15) ,allowNull: false},
  comments: {type: DataTypes.TEXT},
  customerNumber: {type: DataTypes.INTEGER, allowNull: false},
    
},{
    sequelize,
    modelName: 'orders'
});

Customers.hasMany(Orders, {foreignKey: 'customerNumber'});
Orders.belongsTo(Customers, {foreignKey: 'customerNumber'});

export default Orders;