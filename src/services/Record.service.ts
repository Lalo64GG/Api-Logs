import { Record } from "../entities/Record.entities";

type RecordProp = {
  temperature: string;
  humedity: string;
  gas_level: string;
  light: boolean;
};

const create = async ({
  temperature,
  humedity,
  gas_level,
  light,
}: RecordProp) => {
  try {
    const record = new Record();

    record.temperature = temperature;
    record.humedity = humedity;
    record.gas_level = gas_level;
    record.light = light;

    await record.save()

    if (!record.id) {
      throw new Error("Record not created");
    }

    return record;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const get = async () => {
  try {
    const records = await Record.find();
    if (!records) {
      throw new Error("Record not found");
    }
    return records;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const getById = async (id: string) => {
  try {
    const record = await Record.findOneBy({ id });
    if (!record) {
      throw new Error("Record not found");
    }
    return record;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const update = async (
  id: string,
  { temperature, humedity, gas_level, light }: RecordProp
) => {
  try {
    const record = await Record.findOneBy({ id });
    if (!record) {
      throw new Error("Record not found");
    }

    record.temperature = temperature;
    record.humedity = humedity;
    record.gas_level = gas_level;
    record.light = light;

    await record.save();

    return record;
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
  update
};
