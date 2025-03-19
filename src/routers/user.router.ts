import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getAll);
router.post(
    "/",
    commonMiddleware.validateBody(UserValidator.create),
    userController.create,
);
router.get("/:id", commonMiddleware.isIdValid("id"), userController.getById);
router.put(
    "/:id",
    commonMiddleware.isIdValid("id"),
    commonMiddleware.validateBody(UserValidator.update),
    userController.updateById,
);
router.delete(
    "/:id",
    commonMiddleware.isIdValid("id"),
    userController.deleteById,
);

export const userRouter = router;
