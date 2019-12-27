import React, {useEffect, useState} from "react";
import axios from "axios";

const ShowDogs = () => {
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('');
    const [fetch, setFetch] = useState(false);
    const style = {width: '200px'}
    useEffect(() => {
        setLoading(true);
        axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
            setUrl(res.data.message)
            setLoading(false)
        });
        // 监听fetch的变化
    }, [fetch]);
    return (
        <div>
            <button onClick={() => {
                setFetch(!fetch)
            }}>看狗狗
            </button>
            <p> 加载:{loading} url:{url}</p>
            {loading ? <p>狗狗加载中......</p> : <img src={url} alt="" style={style}/>}

        </div>
    )
}
export default ShowDogs

