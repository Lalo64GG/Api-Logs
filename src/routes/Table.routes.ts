import { Router } from 'express';
import {
    createTable,
    getTables,
    getTableId,
    updateTable
} from '../controllers/Table.controller'

const router = Router();

router.post('/', createTable)
router.get('/', getTables)
router.get('/:id', getTableId)
router.put('/:id', updateTable)

export default router;


