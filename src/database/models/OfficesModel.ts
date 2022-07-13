import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../server';

interface OfficesAttributes {

 officeCode: string;
 city: string;
 phone: string;
 addressLine1: string;
 addressLine2: string;
 state: string;
 country: string;
 postalCode: string;
 territory: string;

};

export interface OfficesInput extends Optional<OfficesAttributes, 'officeCode'> {};
export interface OfficesOutput extends Required<OfficesAttributes>{};

class Offices extends Model<OfficesAttributes, OfficesInput> {
  declare officeCode: string;
  declare city: string;
  declare phone: string;
  declare addressLine1: string;
  declare addressLine2: string;
  declare state: string;
  declare country: string;
  declare postalCode: string;
  declare territory: string;
};

Offices.init({
    officeCode: {type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    city: {type: DataTypes.STRING(50), allowNull: false},
    phone: {type: DataTypes.STRING(50), allowNull: false},
    addressLine1: {type: DataTypes.STRING(50), allowNull: false},
    addressLine2: {type: DataTypes.STRING(50), allowNull: false},
    state: {type: DataTypes.STRING(50), allowNull: false},
    country: {type: DataTypes.STRING(50)},
    postalCode: {type: DataTypes.STRING(50), allowNull: false},
    territory: {type: DataTypes.STRING(50)},
    
},{
    sequelize,
    modelName: 'offices'
});

export default Offices;