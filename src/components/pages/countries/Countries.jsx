import { useEffect, useState } from "react";
import { Navbar } from "../../shared/Navbar";
import { Items } from "./Items"
import { client } from "../../../lib/index"

export default function Countries(){

    const [data, setData] = useState([])
    const [searchInput, setSearchInput] = useState(' ')
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    async function getData(filter){
        setIsLoading(true)
        try{
            const res = await client.get(`${filter}?fields=name,region,population`)
            setData(res.data)
            console.log(res.data)
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
        if (searchInput != ""){
            getData(`name/${searchInput}`)
        }
    }, [searchInput])


    useEffect(() => {
        getData('all')
    }, [])

    return(
        <>
            <Navbar />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Countries</h2>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input onChange={(e) => setSearchInput(e.target.value)} value={searchInput}  placeholder="Search by name..." className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500" type="text" />
                    <select className="border border-gray-300 rounded px-3 py-2 w-full sm:w-1/2 focus:outline-none focus:border-blue-500">
                        <option value="">All Regions</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {isError 
                        ? <p>Somethig went wrong</p> 
                    : isLoading 
                        ? <p>Loading...</p> 
                    : data.length == 0
                        ? <p>No countries match your filters.</p>
                    : data.map(val => <Items key={val.name.common} data={val} />)}
                </ul>
            </div>
        </>
    )
}