import Image from "next/image";

const FunctionBlock = ({ nextMonth, prevMonth }) => {

	return (
		<div className="flex items-center">
			<button
				onClick={prevMonth}
				className="w-[30px]"
			>
				<svg className="dark:fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
			</button>
			<button onClick={nextMonth} className="w-[30px]">
				<svg className="dark:fill-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
			</button>
		</div>
	);
};

export default FunctionBlock;
