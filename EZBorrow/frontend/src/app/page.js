"use client";
import Bottom from "@/components/bottom/bottom";
import Calendar from "@/components/calendar/calendar";
import Header from "@/components/header/header";
import MiniCalendar from "@/components/mini-calendar/miniCalendar";
import Modal from "@/components/modal/modal";
import CheckBox from "@/components/modal/units/checkbox";
import NavBar from "@/components/navBar/navBar";
import Link from "@/components/units/Link";
import useRWD from "@/components/useRWD";
import { useState, useEffect } from "react";

const Home = () => {
	/**
	 * leftBarStatus: 控制menu狀態
	 */
	const [leftBarStatus, setLeftBarStatus] = useState(true);
	const device = useRWD();
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
				time.getMonth() +
				1 +
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
	};
	const selectToday = () => {
		setSelectDay(dateDetails.log);
		setCurrentMonth(dateDetails.month);
		setCurrentYear(dateDetails.year);
	};

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
				setToday={selectToday}
				prevMonth={prevMonth}
				nextMonth={nextMonth}
			></Header>
			<div className="flex max-lg:flex-col w-full h-[calc(100%-var(--header-height))]">
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
					selectDay={selectDay}
					setSelectDay={setSelectDay}
					nextMonth={nextMonth}
					prevMonth={prevMonth}
				></Calendar>
				{1024 > device && <Bottom></Bottom>}
			</div>
			<Modal>
				<h1 className="font-bold text-2xl my-5">租借場地：</h1>
				<div className="flex">
					<label>租借時段：</label>
					<div>
						<CheckBox name="borrowTime">時段一：7:00~8:00</CheckBox>
						<CheckBox name="borrowTime">時段二：8:00~9:00</CheckBox>
						<CheckBox name="borrowTime">
							時段三：9:00~10:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段四：10:00~11:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段五：11:00~12:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段六：12:00~13:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段七：13:00~14:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段八：14:00~15:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段九：15:00~16:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段十：16:00~17:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段十一：17:00~18:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段十二：18:00~19:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段十三：19:00~20:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段十四：20:00~21:00
						</CheckBox>
						<CheckBox name="borrowTime">
							時段十五：21:00~22:00
						</CheckBox>
					</div>
				</div>
				<div className="flex">
					<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						取消
					</button>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						提交
					</button>
				</div>
			</Modal>
		</>
	);
};

export default Home;
