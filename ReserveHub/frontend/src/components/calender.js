"use client"
import { useEffect, useState } from "react";

const Calender = () => {
    const [date,setDate] = useState(0);
    useEffect(() => {
        var currentDate = new Date(2023, 12, 0);
        setDate(currentDate.getDate())
        console.log(currentDate.getFullYear());
    },[])


    return (
        <div className="relative right-0 w-[615px] aspect-square bg-slate-500/50 rounded-lg">
            calender
            <div>{date}</div>
        </div>
    )
}

export default Calender;