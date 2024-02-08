import {  useState, useEffect } from "react"
import Digit from "./Digit"

const DigitalClock = () => {
    const [hour, setHour] = useState([0, 0]);
    const [min, setMin] = useState([0, 0]);
    const [sec, setSec] = useState([0, 0]);
    const [amPm, setAmPm] = useState("AM");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            if(hours>12){
                setAmPm("PM")
            }
            // Update hour, minute, and second state with individual digits
            setHour(convertToDigits(hours-12));
            setMin(convertToDigits(minutes));
            setSec(convertToDigits(seconds));
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    // Function to convert number to individual digits
    const convertToDigits = (number) => {
        const numberString = number.toString();
        return numberString.padStart(2, '0').split('').map(Number);
    };

    // console.log(hour,min,sec)
  return (
    <div className="flex flex-row items-center justify-center border-8  border-slate-500  rounded-lg border-gray bg-black h-50">
        <div>
            <Digit num={hour[0]}/>
        </div>
        <div>
            <Digit num={hour[1]}/>
        </div>
        <div id="separator" className="flex flex-col">
            <div className="border border-spacing-2 bg-white border-white rounded-xl p-1.5 my-4" ></div>
            <div className="border border-spacing-2 bg-white border-white rounded-xl p-1.5 my-4"></div>
        </div>
        <div>
            <Digit num={min[0]}/>
        </div>
        <div>
            <Digit num={min[1]}/>
        </div>
        <div id="separator" className="flex flex-col">
            <div className="border border-spacing-2 bg-white border-white rounded-xl p-1.5 my-4" ></div>
            <div className="border border-spacing-2 bg-white border-white rounded-xl p-1.5 my-4"></div>
        </div>
        <div>
        <Digit num={sec[0]}/>
        </div>
        <div>
        <Digit num={sec[1]}/>
        </div>
        <div className="flex flex-col text-white text-5xl ml-2">
            {amPm}
            
        </div>
    </div>
  )
}

export default DigitalClock