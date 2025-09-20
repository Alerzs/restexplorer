import { Link } from "react-router"

export function Items({ data }){
    return(
        <li className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition">
            <Link to={`/countries/${data?.name?.common}`} className="text-blue-600 hover:underline text-lg font-semibold" >{data?.name?.common}</Link>
            <div className="text-gray-600 text-sm mt-1">Region: {data?.region} <br/>Population: {data?.population}
            </div>
        </li>
    )
}