
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
            (position) => {
                const coordinates = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
                }
                resolve(coordinates)
            },
            (error) => {
                reject(error)
            }
            )
        } else {
            reject(new Error('Geolocation is not supported by this browser.'))
        }
    })
}


getCurrentLocation()
    .then((coordinates) => {
        console.log('Latitude:', coordinates.latitude)
        console.log('Longitude:', coordinates.longitude)
    })
    .catch((error) => {
        console.error('Error getting location:', error.message)
    })