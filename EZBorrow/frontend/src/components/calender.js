"use client";
import { useEffect, useState } from "react";

const Calender = () => {
	const [date, setDate] = useState(0);
	useEffect(() => {
		var time = new Date();
		setDate(time.getDate());
		var timeDetails = {
			year: time.getFullYear(),
			month: time.getMonth() + 1,
			date: time.getDate(),
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds(),
		};
        console.log(timeDetails);
	}, []);

	return (
		<div className="relative right-0 w-[615px] aspect-square bg-slate-500/50 rounded-lg">
			calender
			<div>{date}</div>
            
		</div>
	);
};

export default Calender;
