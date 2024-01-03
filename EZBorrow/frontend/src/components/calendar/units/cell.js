const Cell = ({
	children,
	className,
	year,
	month,
	day,
	isToday,
	isSelect,
	setSelectDay,
	date,
}) => {
	return (
		<div
			className={
				"border p-1 relative pt-5 pb-1 " +
				(date ? "cursor-pointer" : "")
			}
		>
			<span
				className={
					"absolute top-1 rounded-full w-5 h-5 flex justify-center items-center " +
					(isToday ? "bg-sky-600 text-white" : "")+
					(isSelect?"":"")
				}
			>
				{date}
			</span>
			<div className="px-1">{children}</div>
		</div>
	);
};

export default Cell;
