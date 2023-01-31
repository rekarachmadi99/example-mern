import express from "express";
import {getUser,getUserById, saveUser, updatedUser, deletedUser} from "../controllers/userController.js";
const router = express.Router();

router.get('/users',getUser)
router.get('/users/:id',getUserById)
router.post('/users',saveUser)
router.put('/users/:id',updatedUser)
router.delete('/users/:id',deletedUser)

export default router;