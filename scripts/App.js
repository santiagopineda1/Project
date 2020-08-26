import Header from "../Components/header/header";
import Home from "../Components/hotels/home";
import {hotelsData} from "../scripts/data";





export default class App extends React.Component {   
    constructor() {
        super()
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Header />
                <Home data={hotelsData}/>
            </div>
        )
    }
}





ReactDOM.render(<App />, document.getElementById('app')
);



