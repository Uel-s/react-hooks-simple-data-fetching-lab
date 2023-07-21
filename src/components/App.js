// create your App component here
import React,{useState, useEffect} from "react";

function App () {

const[dogImageUrl, setDogImageUrl] = useState (null)

const[loading, setLoading] = useState (true)

useEffect(()=>{

fetch("https://dog.ceo/api/breeds/image/random")

.then((res)=>res.json())
.then((data)=>{

    setDogImageUrl(data.message)

    setLoading(false)


})

.catch((error)=>{

    console.error("Error fetching dog image:",error)

    setLoading(false)

})

},[])

if (loading){
    return <p>Loading...</p>
}else {
    return (
        <div>
            <img src={dogImageUrl} alt="A Random Dog"/>
        </div>
    )
}

}
export default App
