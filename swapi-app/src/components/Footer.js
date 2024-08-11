import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSwapiData, clearSwapiData } from '../actions/swapiActions';

const Footer = () => {
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearSwapiData());
    };

    return (
        <footer>
            <button onClick={handleClear}>Clear Data</button>
        </footer>
    );
};

export default Footer;