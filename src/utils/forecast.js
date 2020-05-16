const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9fca7885ebdebb479e33bfef54247bdc&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location! Try again.', undefined)
        } else {
            callback(undefined, 
            'The weather is ' + body.current.weather_descriptions[0] + '.\n' + 'It is currently ' 
            + body.current.temperature + ' degree celcius out and feels like ' + 
            body.current.feelslike + ' degree celcius out,\n' + 'while humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast