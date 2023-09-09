import { Router } from "express";
import {
  updateAssigment,
  fetchAssigment,
  fetchAllAssigment,
} from "../controllers/assigment.controller.mjs";

const router = Router();

router.route("/").get(fetchAllAssigment).put(updateAssigment);
router.route("/:id").put().get(fetchAssigment);

export default router;
