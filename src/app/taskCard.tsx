"use client"




import {
    DeleteTaskAction,
    EditTaskAction,
    Task,
    TaskReducerAction
} from "../../utils/model/task";
import {deleteTaskAction, editTaskAction} from "../../utils/action/taskAction";
import React, {useTransition} from "react";

type TaskCardProps= {
    task: Task;
    optDispatchAction: React.Dispatch<TaskReducerAction>;
    setStateAction: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskCard({task,optDispatchAction,setStateAction}:TaskCardProps){

    const [isPending, startTransition] = useTransition()

    const handleEdit = async ()=>{
        let description =null;
        while(!description){
            description=window.prompt("Enter new description")
        }

        const action:EditTaskAction={
            type :"EDIT_TASK",
            payload:{
                id:task.id,description:description
            }
        }

        startTransition(async ()=>{
            optDispatchAction(action);
            const tasks:Task[]= await editTaskAction(task.id,description)
            setStateAction((prevState:Task[])=>{
                return prevState.map(t=>t.id===task.id ? tasks[0] : t)
            })
        })


    }


    const handleDelete = async ()=>{

        const action:DeleteTaskAction={
            type :"DELETE_TASK",
            payload:{
                id:task.id
            }
        }

        startTransition(async ()=>{
            optDispatchAction(action);
            await deleteTaskAction(task.id)
            setStateAction((prevState:Task[])=>{
                return prevState.filter(t=>t.id!==task.id)
            })
        })



    }

    return (
        <div className=" bg-slate-950 p-3 flex flex-col space-y-3 rounded-xl  ">
            <p className="font-bold text-lg">{task?.title}</p>
            <p className="font-semibold font-mono text-left" >{task?.description}</p>
            <div className="flex flex-row justify-end space-x-3">
                {task.id && <div className="flex space-x-2">  <button disabled={isPending}  onClick={handleEdit} className=" w-20 p-2 rounded-lg bg-slate-400 active:bg-purple-700 active:font-bold" >Edit</button>
					<button disabled={isPending} onClick={handleDelete} className=" w-20 p-2 rounded-lg bg-red-600 active:bg-red-950 active:font-bold" >Delete</button>
				</div>}

            </div>
        </div>
    )
}