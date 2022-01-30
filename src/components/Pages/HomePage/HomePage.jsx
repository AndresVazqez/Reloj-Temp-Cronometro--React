import DigitalClock from './components/DigitalClock/DigitalClock';
import './HomePage.scss'
export default function HomePage () {

    return(
        <div className="homepage">
            <div>
            <DigitalClock/>
            </div>           
        </div>
    )
}