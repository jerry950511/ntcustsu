"use client";
import Calendar from "@/components/calendar/calendar";
import Header from "@/components/header/header";
import MiniCalendar from "@/components/mini-calendar/miniCalendar";
import NavBar from "@/components/navBar/navBar";
import Link from "@/components/units/Link";
import useRWD from "@/components/useRWD";
import { useState, useEffect } from "react";
const Home = () => {
	/**
	 * leftBarStatus: 控制menu狀態
	 */
	const [leftBarStatus, setLeftBarStatus] = useState(true);
	const RWD = useRWD();
	/**
	 * date:完整時間戳 (json)
	 * currentYear: 現在年份
	 * currentMonth: 現在月份
	 * currentDate: 現在日期
	 */
	const [dateDetails, setDateDetails] = useState();
	const [currentYear, setCurrentYear] = useState(0);
	const [currentMonth, setCurrentMonth] = useState(-1);
	const [currentDay, setCurrentDay] = useState(0);
	const [selectDay, setSelectDay] = useState("");

	/**
	 * 設定時間資料
	 */
	useEffect(() => {
		const time = new Date();
		const timeDetails = {
			year: time.getFullYear(),
			month: time.getMonth() + 1,
			date: time.getDate(),
			hour: time.getHours(),
			minute: time.getMinutes(),
			second: time.getSeconds(),
			log:
				time.getFullYear() +
				"-" +
				time.getMonth()+1 +
				"-" +
				time.getDate(),
		};
		setDateDetails(timeDetails);
		setCurrentYear(timeDetails.year);
		setCurrentMonth(timeDetails.month);
		setCurrentDay(timeDetails.date);
		setSelectDay(
			timeDetails.year + "-" + timeDetails.month + "-" + timeDetails.day
		);
		console.log(timeDetails);
	}, []);

	// 月份操作
	const nextMonth = () => {
		setCurrentMonth((prev) => {
			return prev + 1;
		});
	};
	const prevMonth = () => {
		setCurrentMonth((prev) => {
			return prev - 1;
		});
	};

	const nextYear = () => {
		setCurrentYear((prev) => {
			return prev + 1;
		});
	};
	const prevYear = () => {
		setCurrentYear((prev) => {
			return prev - 1;
		});
	};
	const setMonthYear = (input) => {
		setCurrentYear(parseInt(input.split("-")[0]));
		setCurrentMonth(parseInt(input.split("-")[1]));
	}

	useEffect(() => {
		if (currentMonth === 13) {
			setCurrentMonth(1);
			nextYear();
		} else if (currentMonth === 0) {
			setCurrentMonth(12);
			prevYear();
		}
	}, [currentMonth]);

	return (
		<>
			<Header
				leftSideBarSwitch={setLeftBarStatus}
				year={currentYear}
				month={currentMonth}
				setDate={setMonthYear}
				prevMonth={prevMonth} nextMonth={nextMonth}
			></Header>
			<div className="flex w-full h-[calc(100%-var(--header-height))]">
				<NavBar barStatus={leftBarStatus} className="bg-gray-500/10">
					<div className="text-center my-4 w-full">
						<button className="m-auto font-bold bg-white px-5 w-2/3 py-3 shadow-2xl rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
							+ 預約
						</button>
						{dateDetails && (
							<MiniCalendar
								dateDetails={dateDetails}
								year={currentYear}
								month={currentMonth}
								selectDay={selectDay}
								setSelectDay={setSelectDay}
								nextMonth={nextMonth}
								prevMonth={prevMonth}
								setMonthYear={setMonthYear}
							></MiniCalendar>
						)}
						<div className="text-left font-bold">
							<Link>重要公告</Link>
							<Link>最新消息</Link>
							<Link>設定</Link>
						</div>
					</div>
				</NavBar>
				<Calendar
					dateDetails={dateDetails}
					year={currentYear}
					month={currentMonth}
				></Calendar>
			</div>
		</>
	);
};

export default Home;
