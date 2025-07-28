
export default function handleError(error:unknown) {
    if(error instanceof Error){
        return {errorMsg:error.message};
    }
    else{
        return {errorMsg:"Unknown error encountered"};
    }
}