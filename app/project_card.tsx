import Image from "next/image";
import Project1 from "@/public/Start app.svg";

export default function Card() {
	return (
		<div className=" group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4  mb-12">
			<div className=" absolute group-hover:bg-[rgb(250,250,210,0.1)] group-hover:shadow-white  group-hover:drop-shadow-lg rounded-md motion-reduce:transition-none z-0  -inset-y-4 -inset-x-4"></div>

			<Image className="z-10 mb-2 mt-1 text-xs sm:col-span-2 w-28"
				src={Project1}
				alt="Picture of the author"
				width={200}
				height={48}
				loading="lazy"
			/>
			<div className="z-10 sm:col-span-6">
				<h1>Lmdina app</h1>
				<p>
					as a team we created a mobile app that helps people to navigate through the city they travel to
					and help them generate a plan for their trip using gpt and google maps api
				</p>
				<div className=" flex flex-wrap">
					<div className=" mr-2 mb-2 text-xs font-semibold uppercase tracking-wide text-[rgb(255,247,255,0.5)]">react-native</div>
					<div className=" mr-2 mb-2 text-xs font-semibold uppercase tracking-wide text-[rgb(255,247,255,0.5)]">tailwindcss</div>
					<div className=" mr-2 mb-2 text-xs font-semibold uppercase tracking-wide text-[rgb(255,247,255,0.5)]">Api</div>
				</div>
			</div>
		</div>
	)
}

