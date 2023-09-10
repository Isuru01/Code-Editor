import { Router } from "express";
import {
  updateAssigment,
  fetchAssigment,
  fetchAllAssigment,
  deleteAssigment,
} from "../controllers/assigment.controller.mjs";

const router = Router();

router
  .route("/")
  .get(fetchAllAssigment)
  .put(updateAssigment)
  .delete(deleteAssigment);
router.route("/:id").put().get(fetchAssigment);

export default router;
