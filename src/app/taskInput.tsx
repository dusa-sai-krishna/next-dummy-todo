"use client"


import React, {useActionState} from "react";
import {addTaskAction} from "../../utils/action/taskAction";
import {
    AddTaskAction,
    Task,
    TaskInputError,
    TaskInputState, TaskReducerAction
} from "../../utils/model/task";


type TaskInputProps = {
    optDispatchAction: React.Dispatch<TaskReducerAction>;
    setStateAction: React.Dispatch<React.SetStateAction<Task[]>>;
}


export default function TaskInput({optDispatchAction,setStateAction}: TaskInputProps) {

    const initialState: TaskInputState = {
        title: null,
        description: null,
        errors: {}
    }

    const clientAction = async (_prevState: TaskInputState, formData: FormData) => {

        const title = formData.get("title") as string
        const description = formData.get("description") as string
        const id = ""

        const errors: TaskInputError = {}

        if (!title) {
            errors.title = "Title Shouldn't be empty"
        }
        if (!description) {
            errors.description = "Description shouldn't be empty"
        }

        if (Object.keys(errors).length == 0) {
            //form is valid
            const action: AddTaskAction = {
                type: "ADD_TASK",
                payload: {id, title, description}

            }
            optDispatchAction(action);
            const tasks: Task[] = await addTaskAction(title, description)
            setStateAction((prev: Task[]) => [...prev, tasks[0]])
        }

        return {
            title, description, errors
        }


    }


    const [state, formAction, isPending] = useActionState(clientAction, initialState)

    return (
        <div className="bg-slate-700 flex flex-col p-3 rounded-lg w-[50vw]">
            <form action={formAction}
                  className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-1">
                    <label htmlFor="title">Title</label>
                    <input
                        className=" w-full p-2 border border-slate-900 focus:outline focus:outline-blue-400 rounded-md"
                        type="text" placeholder="Enter your title"
                        defaultValue={state.title!}
                        name="title" id="title"/>
                    {state.errors.title &&
						<p className="text-sm text-red-400">{state.errors.title}</p>}

                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="description">Description</label>
                    <textarea
                        className="w-full p-2 border border-slate-900 focus:outline focus:outline-blue-400 rounded-md"
                        placeholder="Enter your description"
                        defaultValue={state.description!}
                        name="description" id="description"/>
                    {state.errors.description &&
						<p className="text-sm text-red-400">{state.errors.description}</p>}
                </div>
                <button type="submit" className="w-full bg-slate-950 p-3"
                        disabled={isPending}> Add
                    Task
                </button>
            </form>
        </div>
    )
}