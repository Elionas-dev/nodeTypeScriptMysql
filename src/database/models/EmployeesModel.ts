import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../server';

interface EmployeesAttributes {

 employeeNumber: number;
 lastName: string;
 firstName: string;
 extension: string;
 email: string;
 officeCode: string;
 reportsTo: number;
 jobTitle: string;

};

export interface EmployeesInput extends Optional<EmployeesAttributes, 'employeeNumber'> {};
export interface EmployeesOutput extends Required<EmployeesAttributes>{};

class Employees extends Model<EmployeesAttributes, EmployeesInput> {
  declare employeeNumber: number;
  declare lastName: string;
  declare firstName: string;
  declare extension: string;
  declare email: string;
  declare officeCode: string;
  declare reportsTo: number;
  declare jobTitle: string;

};

Employees.init({
    employeeNumber: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lastName: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING},
    extension: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    officeCode: {type: DataTypes.STRING},
    reportsTo: {type: DataTypes.INTEGER},
    jobTitle: {type: DataTypes.STRING},
    
},{
    sequelize,
    modelName: 'employees'
});

export default Employees;