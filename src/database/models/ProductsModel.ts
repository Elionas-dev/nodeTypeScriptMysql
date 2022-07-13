import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../server';

interface ProductsAttributes {

    productCode: string;
    productName: string;
    productLine: string;
    productScale: string;
    productVendor: string;
    productDescription: string;
    quantityInStock: string;
    buyPrice: number;
    MSRP: number;
 
};

export interface ProductsInput extends Optional<ProductsAttributes, 'productCode'> {};
export interface ProductsOutput extends Required<ProductsAttributes>{};

class Products extends Model<ProductsAttributes, ProductsInput> {
  
  declare productCode: string;
  declare productName: string;
  declare productLine: string;
  declare productScale: string;
  declare productVendor: string;
  declare productDescription: string;
  declare quantityInStock: string;
  declare buyPrice: number;
  declare MSRP: number;

};

Products.init({
    productCode: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    productName: {type: DataTypes.STRING},
    productLine: {type: DataTypes.STRING},
    productScale: {type: DataTypes.STRING},
    productVendor: {type: DataTypes.STRING},
    productDescription: {type: DataTypes.STRING},
    quantityInStock: {type: DataTypes.STRING},
    buyPrice: {type: DataTypes.DECIMAL(10,2)},
    MSRP: {type: DataTypes.DECIMAL(10,2)},
    
},{
    sequelize,
    modelName: 'products'
});

export default Products;