import { Navbar } from "../../shared/Navbar"
import { useParams } from "react-router"
import { client } from "../../../lib"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Details(){

    const { name } = useParams()
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    async function getData(name){
            setIsLoading(true)
            try{
                const res = await client.get(`name/${name}?fullText=true`)
                setData(res.data[0])
                console.log(res.data[0])
            }catch(error){
                if (error.status == 404){
                    setData([])
                    return
                }
                setIsError(true)
            }finally{
                setIsLoading(false)
            }
        }
    
    useEffect(() => {
        getData(name)
    }, [name])

    return(
        <>
        <Navbar />
        {isError 
            ? <p>Somethig went wrong</p> 
        : isLoading 
            ? <p>Loading...</p> 
        : data.length == 0
            ? <p>Not Found</p>
        : (
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex flex-col gap-4 ml-20">
                    <h2 class="text-3xl font-bold text-gray-900">{name}</h2>
                    <div class="space-y-2 text-gray-700">
                        <p><span class="font-semibold">Official Name:</span> {name}</p>
                        <p><span class="font-semibold">Capital:</span> {data.capital[0]}</p>
                        <p><span class="font-semibold">Region:</span> {data.region}</p>
                        <p><span class="font-semibold">Subregion:</span> {data.subregion}</p>
                        <p><span class="font-semibold">Population:</span> {data.population}</p>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <img class="w-56 h-auto border rounded shadow-lg" src={data.flags.svg} alt={data.flags.alt}/>
                </div>
                <Link class="bg-blue-600 text-white p-2 rounded-lg w-[150px] ml-20" to="/countries" data-discover="true">back to countries</Link>
            </div>
        )
        }

        
        </>
    )
}