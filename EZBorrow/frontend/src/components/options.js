"use client"

import { v4 } from "uuid";

const Options = () => {
	/**
	 * TODO GET 場地資料
	 */
	const spaces = [
		"1F B鏡",
		"1F C鏡",
		"3F會議室",
		"4A",
		"5A",
		"5F韻律教室",
		"6A",
		"6A-1",
	];
	return (
		<select className="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
			<option>全部</option>
			{spaces.map((v) => {
				return <option key={v4()} value={spaces}>{v}</option>;ㄌ
			})}
		</select>
	);
};

export default Options;
