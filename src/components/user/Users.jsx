import { useEffect, useState } from "react";

export default function User(props) {
    
    return (
        <>
            <h1 className="text-xl font-bold">Details of User</h1>
            <div className="bg-gray-200 m-1">
                <ul className="flex flex-wrap justify-evenly 2xl:justify-start">
                    {props.data.length > 0 ?
                        props.data.map(user =>
                            <li className="basis-1/3 2xl:basis-1/2 border-2 m-1 bg-zinc-200 rounded-lg hover:scale-105 hover:shadow-md">
                                <div className="bg-zinc-100 m-1">
                                    <div className="bg-gradient-to-r from-pink-400 via-purple-400 via-blue-300 to-indigo-400">
                                        <img className="scale-125" src={user.avatar} alt="userImage" />
                                    </div>
                                    <div className="p-2">
                                        <div className="flex justify-between items-center">
                                        <p className="text-l font-bold"><span>Name:</span>{user.first_name} {user.last_name}</p>
                                        <div className={`w-2 h-2 rounded-full  ${user.available ? "bg-green-500" : "bg-red-500"}`}></div>
                                        </div>
                                        <p><span className="text-l font-bold" px-1>Email:</span>{user.email}</p>
                                        <p><span className="text-l font-bold" px-1>Gender:</span>{user.gender}</p>
                                        <p><span className="text-l font-bold" px-1>Domain:</span>{user.domain}</p>
                                    </div>
                                </div>
                            </li>
                        ): <p>No Data found</p>
                    }
                </ul>
            </div>
        </>
    );
}