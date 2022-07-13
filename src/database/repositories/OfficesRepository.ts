import AppError from "../../utils/AppError";
import Office, {OfficesInput,OfficesOutput,} from "../models/OfficesModel";

export const getAll = async (): Promise<OfficesOutput[]> => {
  return await Office.findAll();
};

export const getById = async (id: number): Promise<OfficesOutput> => {
  const office = await Office.findByPk(id);

  if (!office) {
    throw new AppError("NotFoundError", "Registro não encontrado!!!", 404);
  }

  return office;
};

export const create = async (payload: OfficesInput): Promise<OfficesOutput> => {
    return await Office.create(payload);
};

export const updateById = async (
    id: number,
    payload: OfficesInput
): Promise<OfficesOutput> => {
    const office = await Office.findByPk(id);

    if(!office) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await office.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const office = await Office.findByPk(id);

    if(!office) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await office.destroy();
};