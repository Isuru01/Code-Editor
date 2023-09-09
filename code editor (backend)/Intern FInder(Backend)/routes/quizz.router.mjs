import { Router } from "express";
import {
  updateQuizz,
  fetchQuizzes,
  fetchQuizz,
} from "../controllers/quizz.controller.mjs";

const router = Router();

router.route("/").get(fetchQuizzes).put(updateQuizz);
router.route("/:qid").put().get(fetchQuizz);

export default router;
