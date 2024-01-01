import "./cell.css"
const Cell = ({ children, className, year, month, day,today,setScheduleDisplay }) => {
	const click = () => {
		console.log(year + "-" + month + "-" + day);
        setScheduleDisplay(year,month,day);
	};

	return (
		<div
			className={"aspect-square pr-2 pb-2 pt-0.5 pl-1 border-x border-t-2 border-b hover:bg-gray-700" + 
                (className ? " " + className : "") +
                (day? " cursor-pointer":"")+
                (today? "border-sky-500 bg-sky-400/30 text-sky-900 dark:border-[#fff1b9] dark:bg-[#fff1b9] dark:text-[#011627]":" border-[#e5e7eb] ")
            }
			onClick={day ? click : null}
		>
			{children}
		</div>
	);
};

export default Cell;
