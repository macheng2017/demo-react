import{useState, useEffect} from "react";
// 自定义Hooks 必须以useXXX开头
// 在每一个页面或者组件使用的都是这个函数的一个实例,之间不共享数据
// 只能在hook中或者function component 中调用
// 只能在top level的位置上调用
//* [Invalid Hook Call Warning – React](https://reactjs.org/warnings/invalid-hook-call-warning.html)
// * [Rules of Hooks – React](https://reactjs.org/docs/hooks-rules.html)
const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        const updatePosition = event => {
            // 为什么会出现这种情况?
            // 这里有个严重的错误,点击几次后会几何级的创建click的监听,导致浏览器卡死
            setPosition({x: event.clientX, y: event.clientY})
        }
        document.addEventListener('mousemove', updatePosition)
        // 清除组件的effect
        return () => {
            document.removeEventListener('mousemove', updatePosition)
        }
    })
    return position
}
export default useMousePosition
