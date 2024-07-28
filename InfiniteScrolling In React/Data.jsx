import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const style = {
    border: "2px solid black",
    margin: "10px"
}

export const Data = () => {
    const [data, setData] = useState(Array.from({ length: 30 }));
    const [hasmore, setHasMore] = useState(true);
    const fetchmore = () => {
        if(data.length < 200){
            setTimeout(()=>{
                setData(data.concat(Array.from({length:10})))
            },500)
        } else {
            setHasMore(false);
        }
    }
    return (
        <>
            <div>
                <InfiniteScroll dataLength={data.length} next={fetchmore} hasMore={hasmore} loader={<p>Loading...</p>} endMessage={<p>All Datas Are Here</p>}>
                    {
                        data.map((item, index) => (
                            <div style={style} key={item}>This Is Div Number {index + 1}</div>
                        ))
                    }
                </InfiniteScroll>
            </div>
        </>
    );
}