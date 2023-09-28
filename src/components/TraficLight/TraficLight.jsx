import { useEffect, useState } from 'react'
import './index.css'

const TraficLight = () => {

    const [color, setColor] = useState("yellow");
    const [checkedStorage, setCheckedStorage] = useState(false)

    useEffect(() => {
        let colorFromStorage = localStorage.getItem("color");

        if(!checkedStorage) {
            setColor(colorFromStorage)
            setCheckedStorage(true)
        }

    }, [])

    let colors = ["red", "yellow", "green"]

    const handleClick = (colorString) => {
        setColor(colorString);
        localStorage.setItem("color", colorString)
    }

    if(checkedStorage) {
        return <div className='container'>
        {
            colors.map((colorString) => {
                let classString = "circle "
                if(color === colorString){
                    classString += colorString;
                }
                return (
                    <div 
                    key={colorString}
                    onClick={()=> handleClick(colorString)}
                    className={classString}>
                    </div>
                )
            })
        }

        </div>
    } else {
        return <div>checking local storage..</div>
    }
}

export default TraficLight