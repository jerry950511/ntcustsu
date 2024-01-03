import React from "react";

const Header = ({ leftSideBarSwitch }) => {
	const showLeftSideBar = () => {
		leftSideBarSwitch((prev) => {
			console.log(prev);
			return !prev;
		});
	};

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
				<div className="flex lg:flex-1"></div>
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
