import AppError from "../../utils/AppError";
import Employee, {EmployeesInput,EmployeesOutput,} from "../models/EmployeesModel";

export const getAll = async (): Promise<EmployeesOutput[]> => {
  return await Employee.findAll();
};

export const getById = async (id: number): Promise<EmployeesOutput> => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    throw new AppError("NotFoundError", "Registro não encontrado!!!", 404);
  }

  return employee;
};

export const create = async (payload: EmployeesInput): Promise<EmployeesOutput> => {
    return await Employee.create(payload);
};

export const updateById = async (
    id: number,
    payload: EmployeesInput
): Promise<EmployeesOutput> => {
    const employee = await Employee.findByPk(id);

    if(!employee) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await employee.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const employee = await Employee.findByPk(id);

    if(!employee) {
        throw new AppError('NotFounfError', 'Resgistro não encontrado', 404);
    }

    return await employee.destroy();
};