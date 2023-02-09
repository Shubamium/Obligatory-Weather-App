import { createContext } from "react";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";
const unitContext = createContext(null);
export default unitContext;

export const TEMP_UNIT = {
    '°C':'celsius',
    '°F':'fahrenheit',
    'K':'kelvin'
}
export function getTemp(temp,textMode){
    switch(temp){
        case 'fahrenheit':
            if(textMode)return '°F';
             return <WiFahrenheit alignmentBaseline={'ideographic'} fontFamily={'Urbanist'}/>;
        case 'celsius':
            if(textMode)return '°C';
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
             return ((value * 9/5) + 32).toFixed(3);
        case 'celsius':
             return value;
        case 'kelvin':
            return (value + 273.15).toFixed(2);
        default:
            return '';
    }
}

export function getSpeed(speed,val){
    if(speed !== 'metric'){
        return (val * 3.281).toFixed(2);
    }
    return val;
}
export function getSpeedUnit(speed){
    if(speed !== 'metric'){
        return 'ft/s';
    }else{
        return 'm/s';
    }

}