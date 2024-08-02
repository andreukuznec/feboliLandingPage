import { useState } from 'react'

export function Slider (){
	
	const [value, setValue] = useState(5);
	
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="w-96 p-4 bg-white shadow-md rounded-lg">
				<label htmlFor="slider" className="block text-gray-700 text-lg font-medium mb-2">
					Choose a value (0-10):
				</label>
				<input
					id="slider"
					type="range"
					min="0"
					max="10"
					value={value}
					onChange={handleChange}
					className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
				/>
				<div className="text-center text-gray-700 mt-2">{value}</div>
			</div>
		</div>
	);
}