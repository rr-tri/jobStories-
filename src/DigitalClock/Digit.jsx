/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import "./style.css"
const Digit = ({num}) => {
    const [segment, setSegment] = useState({ top: false, middle: false, bottom: false, tl: false, tr: false, br: false, bl: false });
   useEffect(() => {
    switch (num) {
        case 1:
            setSegment({ top: false, middle: false, bottom: false, tl: false, tr: true, br: true, bl: false })
            break;
        case 2:
            setSegment({ top: true, middle: true, bottom: true, tl: false, tr: true, br: false, bl: true })
            break;
        case 3:
            setSegment({ top: true, middle: true, bottom: true, tl: false, tr: true, br: true, bl: false })
            break;
        case 4:
            setSegment({ top: false, middle: true, bottom: false, tl: true, tr: true, br: true, bl: false })
            break;
        case 5:true
            setSegment({ top: true, middle: true, bottom: true, tl: true, tr: false, br: true, bl: false })
            break;
        case 6:
            setSegment({ top: true, middle: true, bottom: true, tl: true, tr: false, br: true, bl: true })
            break;
        case 7:
            setSegment({ top: true, middle: false, bottom: false, tl: false, tr: true, br: true, bl: false })
            break;
        case 8:
            setSegment({ top: true, middle: true, bottom: true, tl: true, tr: true, br: true, bl: true })
            break;
        case 9:
            setSegment({ top: true, middle: true, bottom: true, tl: true, tr: true, br: true, bl: false })
            break;
        default:
            setSegment({ top: true, middle: false, bottom: true, tl: true, tr: true, br: true, bl: true })
            break;
    }
   
     return () => {   }
   }, [num])
   
    return (
        <div className="flex flex-row w-fit p-4 " >
            
            <div className="flex flex-col justify-between h-18">
                {/** Top left segment*/}
                <div className={`w-2 h-10 my-1 ${!segment.tl ? "" : "segment-left"} `}></div>
                {/** Bottom left segment */}
                <div className={`w-2 h-10 my-1 ${!segment.bl ? "" : " segment-left"}`}></div>
            </div>
           <div className="flex flex-col gap-9">
             {/** Top segment */}
             <div className={`w-12  ${!segment.top ? "" : "segment-top"} `}>
            </div>
            {/** Middle segment -*/}
            <div className={`w-12   ${!segment.middle ? "" : "segment"} `}></div>
  {/** Bottom segment -*/}
  <div className={`w-12   ${!segment.bottom ? "" : "segment-bottom"} `}></div>
           </div>
            <div className="flex flex-col justify-between w-14]">
               
                 {/** Top right segmen*/}
                 <div className={`w-2 h-10 my-1 ${!segment.tr ? "" : "segment-right"} `}></div>
                {/** Bottom right segment*/}
                <div className={`w-2 h-10  my-1 ${!segment.br ? "" : "segment-right"} `}></div>
            </div>
          
        </div>

    )
}

export default Digit