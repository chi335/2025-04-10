import { useState } from "react";
const Area = () => {
    const [size, setSize] = useState({ width: 150, height: 150 });
    return (
        <div>
            <h1>
                너비 : {size.width}, 높이 : {size.height}
            </h1>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.width = size.width <= 0 ? 0 : size.width - 10;
                    setSize(copy);
                }}
            >
                너비 감소
            </button>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.height += 10;
                    setSize(copy);
                }}
            >
                높이 증가
            </button>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.width += 10
                    setSize(copy);
                }}
            >
                너비 증가
            </button>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.height = size.height <= 0 ? 0 : size.height - 10;
                    setSize(copy);
                }}
            >
                높이 김소
            </button>
        </div >
    );
};
export default Area;
