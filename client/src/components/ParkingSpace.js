import React from 'react'
import "../styles/ParkingSpace.css"
const ParkingSpace = () => {
  return (
    <div class="container">
        <h1>Parking Space Availability</h1>
        <div class="parking-area">
            <div class="parking-type">
                <h2>2-Wheeler</h2>
                <div class="parking-slots">
                    <div class="parking-slot available">
                        <p>Status: Available</p>
                    </div>
                    <div class="parking-slot reserved">
                        <p>Status: Reserved</p>
                    </div>
                    <div class="parking-slot available">
                        <p>Status: Available</p>
                    </div>
                    <div class="parking-slot reserved">
                        <p>Status: Reserved</p>
                    </div>
                </div>
            </div>

            <div class="parking-type">
                <h2>3-Wheeler</h2>
                <div class="parking-slots">
                    <div class="parking-slot reserved">
                        <p>Status: Reserved</p>
                    </div>
                    <div class="parking-slot available">
                        <p>Status: Available</p>
                    </div>
                    <div class="parking-slot available">
                        <p>Status: Available</p>
                    </div>
                </div>
            </div>

            <div class="parking-type">
                <h2>4-Wheeler</h2>
                <div class="parking-slots">
                    <div class="parking-slot available">
                        <p>Status: Available</p>
                    </div>
                    <div class="parking-slot reserved">
                        <p>Status: Reserved</p>
                    </div>
                    <div class="parking-slot reserved">
                        <p>Status: Reserved</p>
                    </div>
                    <div class="parking-slot available">
                        <p>Status: Available</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ParkingSpace