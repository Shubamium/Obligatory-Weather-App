import { createContext } from "react";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";
const unitContext = createContext(null);
export default unitContext;

export const TEMP_UNIT = {
    '°C':'celsius',
    '°F':'fahrenheit',
    'K':'kelvin'
}
export function getTemp(temp){
    switch(temp){
        case 'fahrenheit':
             return <WiFahrenheit alignmentBaseline={'ideographic'} fontFamily={'Urbanist'}/>;
        case 'celsius':
             return <WiCelsius alignmentBaseline={'ideographic'} fontFamily={'Urbanist'}/>;
        case 'kelvin':
            return 'K';
        default:
            return '';
    }
}

export function getTempValue(temp,value){
    switch(temp){
        case 'fahrenheit':
             return (value * 9/5) + 32;
        case 'celsius':
             return value;
        case 'kelvin':
            return value + 273.15;
        default:
            return '';
    }
}