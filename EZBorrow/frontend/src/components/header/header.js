import React, { useRef } from "react";

const Header = ({ leftSideBarSwitch,setDate, year, month,prevMonth,nextMonth }) => {
	const showLeftSideBar = () => {
		leftSideBarSwitch((prev) => {
			console.log(prev);
			return !prev;
		});
	};

	const dateInput = useRef();
	const clickDate = () => {
		dateInput.current.showPicker()
	}
	const dateLog = () => {
		if (month<10) {
			return year+"-0"+month;
		} else {
			return year+"-"+month;
		}
	}
	const changeInput = (e) => {
		setDate(
			e.target.value
		);
	}

	return (
		<header className="bg-white shadow-lg h-[--header-height]">
			<nav
				className="mx-auto flex items-center justify-between p-5 lg:px-8"
				aria-label="Global"
			>
				<div className="w-256 flex gap-5 ">
					<button
						type="button"
						onClick={showLeftSideBar}
						className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-gray-700 focus:bg-slate-500/15"
					>
						<span className="sr-only">側選單</span>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
					<div className="font-bold mr-5"># 場地租借</div>
				</div>
				<div className="flex items-center gap-2">
					<div className="flex gap-2 font-bold">
						<button onClick={prevMonth}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
						</button>
						<button onClick={nextMonth}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
						</button>
					</div>
					<div className="font-extrabold text-xl tracking-wide">
						<button onClick={clickDate}>
							<input ref={dateInput} type="month" className="hidden" onChange={changeInput} value={dateLog()}></input>
							{year}年 {month}月
						</button>
					</div>
					<div>
						<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded">
							今天
						</button>
					</div>
					<div>
						<select>
							<option disabled>選擇場地</option>
							<option select='true'>全部</option>
						</select>
					</div>
					<div>
						<select>
							<option disabled>選擇學會</option>
							<option select='true'>全部</option>
						</select>
					</div>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{/* 其他菜单项 */}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<a
						href="#"
						className="text-sm font-semibold leading-6 text-gray-900"
					>
						Log in <span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</nav>
		</header>
	);
};

export default Header;
