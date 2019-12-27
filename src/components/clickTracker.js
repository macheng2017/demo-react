import React, {useState, useEffect} from "react";

const MouseTracker = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        const updatePosition = event => {
            // 为什么会出现这种情况?
            // 这里有个严重的错误,点击几次后会几何级的创建click的监听,导致浏览器卡死
            console.log("inner")
            setPosition({x: event.clientX, y: event.clientY})
        }
        console.log("add listener")
        document.addEventListener('click', updatePosition)
        // 清除组件的effect
        return ()=>{
            console.log('remove listener')
            document.removeEventListener('click',updatePosition)
        }
    })
    return (<div>
        x:{position.x}
        y:{position.y}
    </div>)

}

export default MouseTracker
