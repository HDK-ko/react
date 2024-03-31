import { useContext } from "react";
import ColorContext, { ColorConsumer } from "./color";

const ColorBox = () => {
    const {state} = useContext(ColorContext);
    return (
        <>
            <div
                style={{
                    width:'64px',
                    height: '64px',
                    background: state.color
                }}
            />
            <div
                style={{
                    width:'32',
                    height: '32',
                    background: state.subcolor
                }}
            />
        </>
    )
}

export default ColorBox;