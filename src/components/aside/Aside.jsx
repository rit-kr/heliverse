
export default function Aside(props) {
    return (
        <>

            <div className="p-4 bg-slate-50">
                <div className="py-2">
                    <ul>
                        <p className="font-medium">Domain</p>
                        {
                            props.domain.map(item =>
                                <li key={item.i} className="py-0">
                                    <label>
                                        <input className="mx-1" type="checkbox" value={item} onClick={() => { props.handleFilter(item, "domain") }} />
                                        {item}
                                    </label>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div>
                    <ul>
                        <p className="font-medium">Gender</p>
                        {
                            props.gender.map(item =>
                                <li className="py-0" key={item.i}>
                                    <label>
                                        <input className="mx-1" type="checkbox" value={item} onClick={() => { props.handleFilter(item, "gender") }} />
                                        {item}
                                    </label>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="py-2">
                    <p>
                    Availablity
                    </p>
                    <label>
                        <input className="mx-1" type="checkbox" onClick={props.handleAvailable} />
                        Available
                    </label>

                </div>
            </div>
        </>
    )
}