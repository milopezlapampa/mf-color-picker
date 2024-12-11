import { useEffect, useState } from "react";
import { getColorsList, getLastColor } from "../helpers/getColors";

export const useColors = () => {

    const [color, setColor] = useState(getLastColor());
    const [colorList, setColorList] = useState(getColorsList());


    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }

    const handleSubmitSaveColor = (e) => {
    e.preventDefault()
    
    const copyColors = [color, ...colorList];
    setColorList(copyColors);
    
    };

    useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorList));
    }, [colorList]);


    return {color, colorList, handleChangeColor, handleSubmitSaveColor}

};