"use server"

import {createClient} from "../supabase/server"

export async function addTaskAction(title:string,description:string){

        const supabase = await createClient()
        const { data:tasks, error } = await supabase
            .from('tasks')
            .insert([
                { title,description },
            ]).select()

        if(error || !tasks){
            throw new Error("Unable to Insert Tasks")
        }

        return tasks
}



export async function editTaskAction(taskId:string,description:string){

        const supabase = await createClient()

    const {data:tasks ,error } = await supabase
        .from('tasks')
        .update({ description: description })
        .eq('id', taskId).select()


    if(error){
            throw new Error(error.message)
        }

    return tasks;
}


export async function deleteTaskAction(taskId:string){
    const supabase = await createClient()

    const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId)

    if(error){
        throw new Error(error.message)
    }

}