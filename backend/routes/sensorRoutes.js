import { Router } from "express";

import { saveData } from "../controllers/sensorController.js";
import { getData } from "../controllers/sensorController.js";
const router = Router();

router.post("/data", saveData);
router.get("/data", getData);
export default router;

