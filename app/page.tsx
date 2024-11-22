import { addTodo } from './actions';

export default async function Home() {

  async function handleAdd(formData: FormData) {
    'use server'
    const title = formData.get('title') as string;
    if (title) await addTodo(title);
  }

  return (
    <main className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <form action={handleAdd} className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          name="title"
          placeholder="Add a todo"
          className="flex-grow border rounded p-2"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </main>
  );
}
