import AppError from "../../utils/AppError";
import Payments, {PaymentsInput,PaymentsOutput} from "../models/PaymentsModel";

export const getAll = async (): Promise<PaymentsOutput[]> => {
  return await Payments.findAll();
};

export const getById = async (id: number): Promise<PaymentsOutput> => {
  const payments = await Payments.findByPk(id);

  if (!payments) {
    throw new AppError("NotFoundError", "Registro não encontrado!!!", 404);
  }

  return payments;
};

export const create = async (payload: PaymentsInput): Promise<PaymentsOutput> => {
    return await Payments.create(payload);
};

export const updateById = async (
    id: number,
    payload: PaymentsInput
): Promise<PaymentsOutput> => {
    const payments = await Payments.findByPk(id);

    if(!payments) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await payments.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const payments = await Payments.findByPk(id);

    if(!payments) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await payments.destroy();
};