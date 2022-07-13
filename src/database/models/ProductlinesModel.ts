import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../server';

interface ProductlinesAttributes {

    productLine: string;
    textDescription: string;
    htmlDescription: string;
    image: string;
 
};

export interface ProductlinesInput extends Optional<ProductlinesAttributes, 'productLine'> {};
export interface ProductlinesOutput extends Required<ProductlinesAttributes>{};

class Productlines extends Model<ProductlinesAttributes, ProductlinesInput> {
  
  declare productLine: string;
  declare textDescription: string;
  declare htmlDescription: string;
  declare image: string;

};

Productlines.init({
    productLine: {type: DataTypes.STRING(50), primaryKey: true, autoIncrement: true, allowNull: false},
    textDescription: {type: DataTypes.STRING(4000)},
    htmlDescription: {type: DataTypes.TEXT('medium')},
    image: {type: DataTypes.BLOB('medium')},
    
},{
    sequelize,
    modelName: 'payments'
});

export default Productlines;