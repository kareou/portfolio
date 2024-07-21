
export default function Card() {
	return (
		<div className=" group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 ">
			<div className=" absolute group-hover:bg-[rgb(250,250,210,0.1)] group-hover:shadow-white  group-hover:drop-shadow-lg rounded-md motion-reduce:transition-none z-0  -inset-y-4 -inset-x-4"></div>

			<div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[rgb(255,247,255,0.5)] sm:col-span-2 ">mars - july 2023</div>
			<div className="z-10 sm:col-span-6">
				<h1>front-end developer intern - flsht</h1>
				<p>
					web-site to manage university files transaction between director and student and manage student information
				</p>
				<div className=" flex flex-wrap">
					<div className=" mr-2 mb-2 text-xs font-semibold uppercase tracking-wide text-[rgb(255,247,255,0.5)]">react</div>
					<div className=" mr-2 mb-2 text-xs font-semibold uppercase tracking-wide text-[rgb(255,247,255,0.5)]">tailwindcss</div>
					<div className=" mr-2 mb-2 text-xs font-semibold uppercase tracking-wide text-[rgb(255,247,255,0.5)]">laravel</div>
				</div>
			</div>
		</div>
	)
}
