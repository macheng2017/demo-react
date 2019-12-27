import {useState, useEffect} from "react";
import axios from "axios";

const useUrlLoader = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    // 渲染完毕执行Effect
    useEffect(() => {
        setLoading(true)
        axios.get(url).then((res) => {
            console.log(res)
            // 这里不能使用对象,很奇怪的错误
            setData(res.data.message)
            setLoading(false)
        })
    }, [url])

    return [data, loading]
}
export default useUrlLoader

