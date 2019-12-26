import React, {useState} from 'react'
// 定义一个组件
const LikeButton = () => {
    // 第一个参数是状态名称,第二个参数是设置第一个状态的方法名以setXXX开始
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    const [count,setCount] = useState(0)

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
            <button onClick={()=>{
                setCount(count+1)
            }}>
                {count}
            </button>
        </div>

    )
}

export default LikeButton
