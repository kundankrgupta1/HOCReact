const Counter = ({ count, increment, decrement }) => {
	return (
		<div>
			<div>{count}</div>
			<button onClick={increment}>INC</button>
			<button onClick={decrement}>DEC</button>
		</div>
	)
}

export default Counter;