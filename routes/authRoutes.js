import express from "express";
import {
  loginController,
    registerController,
  } from "../controllers/authController.js";
//router object
const router = express.Router(); 

//routes

//Register || POST
router.post('/register',registerController)
//LOGIN || PPOST
router.post('/login',loginController)
//export
export default router;