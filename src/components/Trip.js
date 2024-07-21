import TripData from "./TripData";
import "./TripStyles.css"
import React from 'react'
import Trip1 from "../reimages/5.jpg"
import Trip2 from "../reimages/8.jpg"
import Trip3 from "../reimages/6.jpg"

function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination through google maps</p>
            <div className="trip-card">
                <TripData
                image = {Trip1}
                heading = "Trip in Indonesia"
                text = "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific Oceans. It consist of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and Guinea"
                />
                <TripData
                image = {Trip2}
                heading = "Trip in Malaysia"
                text = "Malaysia is a Southeast Asian country occupying parts of Malay Peninsula and the island of Borneo. It is known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influence"
                />
                <TripData
                image = {Trip3}
                heading = "Trip in France"
                text = "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris its capital is formed for its fasion houses, classical arts museums including the Louvre and monuments like the Eiffel Tower"
                />
            </div>
        </div>
    )
}
export default Trip;