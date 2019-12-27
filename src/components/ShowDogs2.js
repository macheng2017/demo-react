import React from "react";
import useUrlLoader from "../hooks/useUrlLoader";

const ShowDogs = () => {
    const style ={width:'200px'}
    const [data,loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
    return (
        <div>
            <p> 加载Dog2:{loading} url:{data}</p>
            {loading ? <p>狗狗加载中......</p> : <img src={data} alt="" style={style}/>}
        </div>
    )
}
export default ShowDogs

