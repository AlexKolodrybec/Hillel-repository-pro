import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSwapiData, clearSwapiData } from '../actions/swapiActions';

const SwapiInfo = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.swapi);

    useEffect(() => {
        dispatch(fetchSwapiData('https://swapi.py4e.com/api/people/1/'));
    }, [dispatch]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>{data.name}</h2>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                    {}
                </div>
            )}
        </div>
    );
};

export default SwapiInfo;