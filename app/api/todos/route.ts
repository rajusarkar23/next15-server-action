import { connectToDB } from "@/lib/db";
import { Todo } from "@/model/Todo";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    const {title} = await req.json()
    if (!title) {
        return NextResponse.json({error: "Title is required"})
    }

    await connectToDB()
    try {
        const newTodo = await Todo.create({title})
        console.log(newTodo);
        return NextResponse.json({succee: true})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: `${error}`})
    }
}