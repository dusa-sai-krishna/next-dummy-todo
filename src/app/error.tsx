"use client"


export default function ErrorBoundary({error}:{error:unknown}){


    if(error instanceof  Error){
        console.error(error.message)
        alert(error.message)

    }
    else{
        console.error(error)
    }


}