import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({ name: 'Mao box github' })
	.use(reactotronRedux())
	.connect()

export default Reactotron
