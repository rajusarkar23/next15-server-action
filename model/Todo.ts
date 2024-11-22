import { model, models, Schema } from "mongoose";

const TodoSchema = new Schema({
    title: {type: String, required: true},
})

export const Todo = models.Todo || model("Todo", TodoSchema)