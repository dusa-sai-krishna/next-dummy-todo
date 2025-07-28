"use server"

import {getTasks} from "../../utils/supabase/task";
import TaskDisplay from "@/app/taskDisplay";




export default async function Home() {


    const {tasks,errorMsg} = await getTasks();
    if(errorMsg){throw new Error(errorMsg)}
    console.log(tasks)
    return   <TaskDisplay tasks={tasks}/>
}
