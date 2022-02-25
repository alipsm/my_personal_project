import {render} from 'react-dom';
import {store} from './component/Redux/Store/store'
import App from './App';
import { Provider } from 'react-redux';
render(<Provider store={store}><App/></Provider>,document.getElementById("root"));