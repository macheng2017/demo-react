import React, {useState, useEffect} from "react";

const MouseTracker = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        document.addEventListener('click', event => {
            // 这里有个严重的错误,点击几次后会几何级的创建click的监听,导致浏览器卡死
            console.log("inner")
            setPosition({x: event.clientX, y: event.clientY})
        })
    })
    return (<p>
        x:{position.x}
        y:{position.y}
    </p>)

}

export default MouseTracker
