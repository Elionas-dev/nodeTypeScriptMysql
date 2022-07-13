import AppError from "../../utils/AppError";
import Products, {ProductsInput,ProductsOutput,} from "../models/ProductsModel";

export const getAll = async (): Promise<ProductsOutput[]> => {
  return await Products.findAll();
};

export const getById = async (id: number): Promise<ProductsOutput> => {
  const products = await Products.findByPk(id);

  if (!products) {
    throw new AppError("NotFoundError", "Registro não encontrado!!!", 404);
  }

  return products;
};

export const create = async (payload: ProductsInput): Promise<ProductsOutput> => {
    return await Products.create(payload);
};

export const updateById = async (
    id: number,
    payload: ProductsInput
): Promise<ProductsOutput> => {
    const products = await Products.findByPk(id);

    if(!products) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await products.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const products = await Products.findByPk(id);

    if(!products) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await products.destroy();
};