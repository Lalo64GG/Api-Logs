import { Router } from "express";
import {
    createRecord,
    getRecords,
    getRecordId,
    updateRecord
} from '../controllers/Record.controller'

const router = Router();

router.post('/', createRecord)
router.get('/', getRecords)
router.get('/:id', getRecordId)
router.put('/:id', updateRecord)

export default router;