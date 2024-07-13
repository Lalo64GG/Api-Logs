import { Request, Response } from "express";
import RecordService from "../services/Record.service";

export const createRecord = async (req: Request, res: Response) => {
  try {
    const record = await RecordService.create(req.body);
    return res.status(201).json(record);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const getRecords = async (req: Request, res: Response) => {
  try {
    const records = await RecordService.get();

    if (!records) {
      return res.status(404).json({ message: "No records found" });
    }

    return res.status(200).json(records);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const getRecordId = async (req: Request, res: Response) => {
  try {
    const record = await RecordService.getById(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    return res.status(200).json(record);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};

export const updateRecord = async (req: Request, res: Response) => {
  try {
    const record = await RecordService.update(req.params.id, req.body);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    return res.status(200).json(record);
  } catch (error) {
    if (error instanceof Error)
      return res.status(500).json({ message: error.message });
  }
};
