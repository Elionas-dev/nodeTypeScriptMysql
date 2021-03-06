import AppError from "../../utils/AppError";
import Customer, {CustomersInput,CustomersOutput,} from "../models/CustomersModel";

export const getAll = async (): Promise<CustomersOutput[]> => {
  return await Customer.findAll();
};

export const getById = async (id: number): Promise<CustomersOutput> => {
  const customer = await Customer.findByPk(id);

  if (!customer) {
    throw new AppError("NotFoundError", "Registro não encontrado!!!", 404);
  }

  return customer;
};

export const create = async (payload: CustomersInput): Promise<CustomersOutput> => {
    return await Customer.create(payload);
};

export const updateById = async (
    id: number,
    payload: CustomersInput
): Promise<CustomersOutput> => {
    const customer = await Customer.findByPk(id);

    if(!customer) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await customer.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const customer = await Customer.findByPk(id);

    if(!customer) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await customer.destroy();
};