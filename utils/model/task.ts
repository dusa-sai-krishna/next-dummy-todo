
export type Task={
    id:string,
    title:string,
    description:string,
}

export type TaskDBResponse={
    tasks:Task[],
    errorMsg:string|null
}


export type TaskInputState={
    title:string | null
    description:string | null
    errors:TaskInputError
}

export type TaskInputError={
    title?:string
    description?:string
}
export type AddTaskAction = {
    type: "ADD_TASK";
    payload: {
        id: string;
        title: string;
        description: string;
    };
};

export type EditTaskAction = {
    type: "EDIT_TASK";
    payload: {
        id: string;
        description: string;
    };
};

export type DeleteTaskAction = {
    type: "DELETE_TASK";
    payload: {
        id: string;
    };
};

export type TaskReducerAction =
    | AddTaskAction
    | EditTaskAction
    | DeleteTaskAction;
