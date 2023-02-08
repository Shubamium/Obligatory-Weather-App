import { motion } from "framer-motion"

export function WeatherStat({header,icon,text}){
    return (
        <motion.div className="weather-stat"
            initial={{y:100}}
            whileInView={{y:0}}
            transition={{ease:"easeOut"}}
            whileHover={{scale:1.05}}
        >
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                <h2>{header}</h2>
                <p className="value">{text}</p>
            </div>
        </motion.div>
    )
}