import { Table } from "../entities/Table.entities";

type TableProp = {
  seat1: boolean;
  seat2: boolean;
  seat3: boolean;
  seat4: boolean;
};

const create = async ({ seat1, seat2, seat3, seat4 }: TableProp) => {
  try {
    const table = new Table();

    table.seat1 = seat1;
    table.seat2 = seat2;
    table.seat3 = seat3;
    table.seat4 = seat4;

    await table.save();

    if (!table.id) {
      throw new Error("Table not created");
    }

    return table;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const get = async () => {
  try {
    const tables = await Table.find();
    if (!tables) {
      throw new Error("Table not found");
    }
    return tables;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const getById = async (id: string) => {
  try {
    const table = await Table.findOneBy({ id });

    if (!table) {
      throw new Error("Table not found");
    }

    return table;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const update = async (
  id: string,
  { seat1, seat2, seat3, seat4 }: TableProp
) => {
  try {
    const table = await Table.findOneBy({ id });

    if (!table) {
      throw new Error("Table not found");
    }

    table.seat1 = seat1;
    table.seat2 = seat2;
    table.seat3 = seat3;
    table.seat4 = seat4;

    return table;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};


export default {
    create,
    get,
    getById,
    update,
}