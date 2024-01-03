import Header from "./units/header";
import Table from "./units/table";

const Calendar = ({dateDetails,year,month}) => {
	
	return (
		<div className="w-full h-full flex flex-col">
			<Header></Header>
			<Table dateDetails={dateDetails} year={year} month={month}></Table>
		</div>
	);
};

export default Calendar;
