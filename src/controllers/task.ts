import { Request, Response, NextFunction } from "express";
import { TaskModel, Task } from "src/models/Task";

/**
 * GET /
 * Tasks page.
 */
export let tasks = (req: Request, res: Response, next: NextFunction) => {
  Task.findById(req.user.id, (err: any, task: TaskModel) => {
    if (err) {
      return next(err);
    }
    req.flash("success", { msg: "Password has been changed." });
  });
};

export let newTask = (req: Request, res: Response, next: NextFunction) => {
  Task.create(req.user.id, (err: any, task: TaskModel) => {
    if (err) return next(err);
    req.flash("success", { msg: "Password has been changed." });
  });
};
