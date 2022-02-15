import React from 'react';
import './css/style.css';

const FindLocation = () => {
    return (
        <>
            <div className="search">
                <h2>Go to :</h2>
                <form>
                    <input type="text" placeholder="Address" required />
                    <button>Search</button>
                </form>
            </div>
        </>
    );
}

export default FindLocation;