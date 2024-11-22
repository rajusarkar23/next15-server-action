'use server'

import { connectToDB } from "@/lib/db"
import { Todo } from "@/model/Todo"
import { revalidatePath } from "next/cache"

export async function addTodo(title: string) {
    await connectToDB()
    await Todo.create({title})
    revalidatePath("/")
}