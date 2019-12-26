import React, {useState, useEffect} from 'react'
// 定义一个组件
const LikeButton = () => {
    // 第一个参数是状态名称,第二个参数是设置第一个状态的方法名以setXXX开始
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    const [count, setCount] = useState(0)
    // 每次渲染之后执行,类似go语言中的defer
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    // 组件的view部分
    return (
        <div>
            <button onClick={() => {
                setLike(like + 1)
            }}>
                {like} 🤘
            </button>
            <button onClick={() => {
                setOn(!on)
            }}>
                {on ? 'On' : 'Off'}
            </button>
            <button onClick={() => {
                setCount(count + 1)
            }}>
                {count}
            </button>
        </div>

    )
}

export default LikeButton
