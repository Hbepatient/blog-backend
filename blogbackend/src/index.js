import ReactDOM from 'react-dom'
import { BrowserRouter} from 'react-router-dom';
import App from "./App";
import './index.css'

const mountNode = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    mountNode
)