import React from 'react';
import './css/style.css';

const FindLocation = () => {
    return (
        <>
            <div className="search">
                <h2>Type an address</h2>
                <form>
                    <input type="text" placeholder="Address" required />
                    <button title="Search">Search</button>
                </form>
            </div>
        </>
    );
}

export default FindLocation;
