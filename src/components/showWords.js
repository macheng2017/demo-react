import React, {useState} from 'react'

// 这个组件的目的是输入一些句子点击提交之后和之前的句子合并成一长句话
const ShowWords = () => {
    const [str, setStr] = useState('')
    let input ='123'
    return (
        <div>
            {str} <br/>
            <input type="text" value={input}/>
            <button onClick={() => {
                setStr(str + "++")
            }}>
            </button>
        </div>
    )
}

export default ShowWords
