// Home page
import Options from "@/components/options";
import Calender from "@/components/calender";
import Container from "@/components/container";
import Scheduling from "@/components/scheduling";
import RootLayout from "./layout";

const Home = () => {
	return (
		<RootLayout>
			<Container>
				<div className="flex flex-col items-center">
					<h1 className="text-3xl font-bold my-5">
						# 學校場地租借系統
					</h1>
					<div className="px-2">
						<Options></Options>
					</div>
					<div className="flex px-2 py-1 gap-1">
						<Calender></Calender>
						<Scheduling></Scheduling>
					</div>
				</div>
			</Container>
		</RootLayout>
	);
};

export default Home;
