import {createClient} from "./server";
import handleError from "../handleError";
import {TaskDBResponse} from "../model/task";


const supabase = await createClient();

export async function getTasks(): Promise<TaskDBResponse>{

    try{
        console.log("getTasks was called")
        const { data: tasks, error } = await supabase
            .from('tasks')
            .select('*')


        if(error){
            throw new Error("Unable to fetch tasks")
        }

        return {tasks,errorMsg:null}

    }
    catch(error){
        console.error(error);
        return {tasks:[],errorMsg:handleError(error).errorMsg}
    }


}

