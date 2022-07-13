import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../server';

interface PaymentsAttributes {

    customerNumber: number;
    checkNumber: string;
    paymentDate: string;
    amount: string;
 
};

export interface PaymentsInput extends Optional<PaymentsAttributes, 'checkNumber'> {};
export interface PaymentsOutput extends Required<PaymentsAttributes>{};

class Payments extends Model<PaymentsAttributes, PaymentsInput> {
  
  declare customerNumber: number;
  declare checkNumber: string;
  declare paymentDate: string;
  declare amount: string;

};

Payments.init({
    customerNumber: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    checkNumber: {type: DataTypes.STRING},
    paymentDate: {type: DataTypes.STRING},
    amount: {type: DataTypes.STRING},
    
},{
    sequelize,
    modelName: 'payments'
});

export default Payments;