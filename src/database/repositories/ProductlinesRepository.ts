import AppError from "../../utils/AppError";
import Productlines, {ProductlinesInput,ProductlinesOutput,} from "../models/ProductlinesModel";

export const getAll = async (): Promise<ProductlinesOutput[]> => {
  return await Productlines.findAll();
};

export const getById = async (id: number): Promise<ProductlinesOutput> => {
  const productlines = await Productlines.findByPk(id);

  if (!productlines) {
    throw new AppError("NotFoundError", "Registro não encontrado!!!", 404);
  }

  return productlines;
};

export const create = async (payload: ProductlinesInput): Promise<ProductlinesOutput> => {
    return await Productlines.create(payload);
};

export const updateById = async (
    id: number,
    payload: ProductlinesInput
): Promise<ProductlinesOutput> => {
    const productlines = await Productlines.findByPk(id);

    if(!productlines) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await productlines.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const productlines = await Productlines.findByPk(id);

    if(!productlines) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await productlines.destroy();
};