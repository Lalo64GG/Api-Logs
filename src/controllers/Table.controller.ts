import { Request, Response } from "express";
import TableService from "../services/Table.service";
import { publishToMqtt } from "../helper/Publisher";

export const createTable = async (req: Request, res: Response) => {
  try {
    const table = await TableService.create(req.body);

    if (!table) {
      return res.status(400).json({ message: "Failed to create table" });
    }
    if (table) publishToMqtt(table);
    return res.status(201).json(table);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const getTables = async (req: Request, res: Response) => {
  try {
    const table = await TableService.get();

    if (!table) {
      return res.status(404).json({ message: "No tables found" });
    }

    return res.status(200).json(table);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const getTableId = async (req: Request, res: Response) => {
  try {
    const table = await TableService.getById(req.params.id);

    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    return res.status(200).json(table);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const updateTable = async (req: Request, res: Response) => {
  try {
    const table = await TableService.update(req.params.id, req.body);

    if (!table) {
      return res.status(404).json({ message: "Table not found" });
    }

    return res.status(204);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
