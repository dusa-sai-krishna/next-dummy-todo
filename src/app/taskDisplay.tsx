"use client"

import {Task, TaskReducerAction} from "../../utils/model/task";
import {TaskCard} from "@/app/taskCard";
import {useOptimistic, useState} from "react";
import TaskInput from "@/app/taskInput";

function TaskDisplay({tasks}: { tasks: Task[] }) {

    const [state, setState] = useState(tasks)
    const [optimisticState, dispatch] = useOptimistic(state, (state:Task[], action:TaskReducerAction) => {

        switch (action.type) {

            case "ADD_TASK": {
                const {id, title, description} = action.payload
                return [...state, {id, title, description}]
            }
            case "EDIT_TASK": {
                const {id, description} = action.payload
                return state.map(t => t.id === id ? {...t, description} : t)
            }
            case "DELETE_TASK": {
                const {id} = action.payload
                return state.filter(t => t.id !== id)
            }
            default:
                return [...state]

        }
    })

    return (
        <div
            className="bg-slate-900 min-h-[100vh] flex flex-col justify-center items-center space-y-3">
            <h1 className="text-2xl font-bold mb-10">Task Manager</h1>
            <TaskInput optDispatchAction={dispatch} setStateAction={setState}/>

            <div className="w-[60vw] bg-slate-600 rounded-lg p-3 flex flex-col space-y-6">

                {optimisticState?.length !== 0 ? optimisticState.map((task) =>
                    <TaskCard task={task} key={task.id} optDispatchAction={dispatch} setStateAction={setState}/>
                ) : <p className="text-white font-bold text-center">Create some
                    tasks to view them</p>}</div>
        </div>
    )
}

            export default TaskDisplay
