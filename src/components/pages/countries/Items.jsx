

export function Items({ data }){
    return(
        <li className="bg-white border border-gray-200 rounded-xl p-4 shadow hover:shadow-lg transition">
            <a className="text-blue-600 hover:underline text-lg font-semibold" href="/countries/Jamaica" data-discover="true">{data?.name?.common}</a>
            <div className="text-gray-600 text-sm mt-1">Region: {data?.region} <br/>Population: {data?.population}
            </div>
        </li>
    )
}