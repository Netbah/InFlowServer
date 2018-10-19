import mongoose from "mongoose";

export type TaskModel = mongoose.Document & {
  id: Number;
  title: String;
  description: String;
  priority: String;
  time: Date;
  duration: Number;
  usual: Boolean;
  status: String;
  creator: Number;
  updatedDate: Date;
};

const taskSchema = new mongoose.Schema(
  {
    id: Number,
    title: String,
    description: String,
    priority: String,
    time: Date,
    duration: Number,
    usual: Boolean,
    status: String,
    creator: Number,
    updatedDate: Date
  },
  { timestamps: true }
);

const Task = mongoose.model("User", taskSchema);
export default Task;
