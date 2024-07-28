import { useState, useEffect, useCallback } from "react";

// Dummy function to simulate fetching new data
const fetchMoreData = (currentLength) => {
    // Simulate an API call to fetch data
    return new Array(50).fill(null).map((_, index) => `Item ${currentLength + index}`);
};

export const Data1 = () => {
    const [data, setData] = useState(() => Array.from({ length: 40 }, (_, index) => `Item ${index}`));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // Function to load more data
    const loadMoreData = useCallback(() => {
        if (loading || !hasMore) return;

        setLoading(true);

        // Simulate data fetching
        setTimeout(() => {
            const newData = fetchMoreData(data.length);
            setData((prevData) => [...prevData, ...newData]);

            setLoading(false);

            if (data.length + newData.length >= 500) {
                setHasMore(false);
            }
        }, 1000); // Simulate network delay
    }, [data, loading, hasMore]);

    useEffect(() => {
        const handleScroll = () => {
            const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 1;
            if (bottom) {
                console.log('Scrolled to bottom');
                loadMoreData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loadMoreData]);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            {loading && <div>Loading...</div>}
            {!hasMore && <div>No more data</div>}
        </div>
    );
};