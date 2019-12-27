import React, {useEffect, useState} from "react";
import axios from "axios";

const ShowDogs = () => {
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('');
    useEffect(() => {
        setLoading(true);
        axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
            setUrl(res.data.message)
        });
        setLoading(false)
    });

    return (
        <div>
            dogs
            {loading ? 'loading' : <img src={url} alt=""/>}
        </div>

    )

}

export default ShowDogs

