import React, { createContext, useContext, useState } from "react";
import colorDate from "./color-data.json";
import { v4 } from "uuid";

const ColorContect = createContext();
export const useColors = () => useContext(ColorContect);

export default function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorDate);

    const addColor = ( title, color ) =>
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ]);

    const rateColor = (id, rating) =>
        setColors(
            colors.map(color => (color.id === id ? {...color, rating } :color ))
        );

    const removeColor = id => setColors(colors.filter(color => color.id !== id));
    return(
        <ColorContect.Provider value={{ colors, addColor, removeColor, rateColor }}>
            {children}
            </ColorContect.Provider>
    );
}
