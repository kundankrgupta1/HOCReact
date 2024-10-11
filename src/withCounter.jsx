import { useState } from "react"

const withCounter = (WrappedComponet) => {
	return function WithCounter(props) {
		const [count, setCount] = useState(0);
		const increment = () => setCount(count + 1);
		const decrement = () => setCount(count - 1);
		return (
			<WrappedComponet
				count={count}
				increment={increment}
				decrement={decrement}
				{...props}
			/>
		);
	};
};

export default withCounter;