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
    productLine: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    textDescription: {type: DataTypes.STRING},
    htmlDescription: {type: DataTypes.STRING},
    image: {type: DataTypes.STRING},
    
},{
    sequelize,
    modelName: 'payments'
});

export default Productlines;