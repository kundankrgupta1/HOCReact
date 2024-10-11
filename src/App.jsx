
import withCounter from './WithCounter'
import Counter from './Counter'

const EnhanceCompo = withCounter(Counter)
const App = () => {
  return (
	<div>
		<EnhanceCompo/>
	</div>
  )
}

export default App