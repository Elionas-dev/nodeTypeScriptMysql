import AppError from "../../utils/AppError";
import Order, {OrdersInput,OrdersOutput,} from "../models/OrdersModel";

export const getAll = async (): Promise<OrdersOutput[]> => {
  return await Order.findAll();
};

export const getById = async (id: number): Promise<OrdersOutput> => {
  const order = await Order.findByPk(id);

  if (!order) {
    throw new AppError("NotFoundError", "Registro não encontrado!!!", 404);
  }

  return order;
};

export const create = async (payload: OrdersInput): Promise<OrdersOutput> => {
    return await Order.create(payload);
};

export const updateById = async (
    id: number,
    payload: OrdersInput
): Promise<OrdersOutput> => {
    const order = await Order.findByPk(id);

    if(!order) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await order.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const order = await Order.findByPk(id);

    if(!order) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await order.destroy();
};