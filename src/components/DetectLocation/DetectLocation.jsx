import React, { useEffect } from 'react';
import './css/style.css';

// Components
import UserLocationMap from '../UserLocationMap/UserLocationMap';

const DetectLocation = () => {
    const loadingSuccess = () => {
        let loading = document.querySelector(".loading");
        loading.classList.add("success");
    }

    // Get User Position
    const getPosition = () => {
        if ("geolocation" in navigator) {
            console.log("Geolocation supported!");
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLatitude = position.coords.latitude;
                const userLongitude = position.coords.longitude;

                // Add userPosition coordinates to localStorage
                localStorage.setItem("Latitude", userLatitude);
                localStorage.setItem("Longitude", userLongitude);

                const content = `
                    <div>
                        <h4>• Latitude : <span>${userLatitude}</span></h4>
                        <h4>• Longitude : <span>${userLongitude}</span></h4>
                    </div>
                `;

                let userPosition = document.createElement("div");
                userPosition.classList.add("position");
                userPosition.innerHTML = content;

                let userLocation = document.querySelector(".userLocation");
                userLocation.appendChild(userPosition);
                loadingSuccess();
            });
        } else {
          console.log("Geolocation not supported!");
            console.log("Not Available");
            const content = `
                <div>
                    <h5>Something is wrong :(</h5>
                </div>
            `;

            let userPosition = document.createElement("div");
            userPosition.innerHTML = content;

            let userLocation = document.querySelector(".userLocation");
            userLocation.appendChild(userPosition);
        }
    }

    // Check if the user navigator supports geolocation
    useEffect(() => {
        getPosition();
    }, []);

    return (
        <>
            <div className="userLocation">
                <h3>○ Location Coordinates :</h3>
                <span className="loading">Getting your location coordinates...</span>
            </div>
            <div className="userLocationMap">
                <UserLocationMap />
            </div>
        </>
    );
}

export default DetectLocation;
