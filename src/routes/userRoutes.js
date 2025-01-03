import express from 'express'
import { saveUser, showUser, updateUser, deleteUser } from "../controller/userController";
const router = express.Router()

router.post('/', saveUser);
router.get('/', showUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

export default router
