import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout/Layout';

const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(url);
                console.log(url)
                setData(result.data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return [{ data, isLoading, isError }, setUrl];
};

const hacker = () => {
        const [query, setQuery] = useState('redux');
        const [{ data, isLoading, isError }, doFetch] = useDataApi(
            'https://hn.algolia.com/api/v1/search?query=redux', { hits: [] },
        );

        return ( 
            <Layout>
                <input
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button
                    type="button"
                    onClick={() =>
                        doFetch(
                            `http://hn.algolia.com/api/v1/search?query=${query}`
                        )
                    }
                >
                    Search
                </button>
            {
                isError && <div> Something went wrong... </div>}

                {
                    isLoading ? ( 
                        <button type="button" className="border border-red-500 bg-rose-600" disabled>
                            <svg className="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24">
                            Loading...
                            </svg>
                        </button>
                    ) : ( 
                        <ul > {
                            data.hits.map(item => ( 
                                <li key = { item.objectID } >
                                <a href = { item.url } > { item.title } </a> 
                                </li >
                            ))
                        } 
                        </ul>
                    )
                }
            </Layout> 
        );
    }

export default hacker;