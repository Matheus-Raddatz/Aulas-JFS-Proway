import { useRouteError } from "react-router-dom/dist"

export default function ErrorMsg(){
    const error = useRouteError()
    return(
       <div>
           <h1>ERRO `${error.status} ${error.data} `</h1>
       </div>

       
    )
}