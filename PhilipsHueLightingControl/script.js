//Alpha Version 0.01
//Author Alvin Waters

//All important code goes here
//We need to contact the api for philips hue
//Return and process the data
//We will also need a .json file to hold any api keys, the ip address, maybe login info

//examples are here https://developers.meethue.com/develop/get-started-2/

function getAllLights() {
    fetch(``).then(result => {
        return result.json(); //makes the api call, and returns as json
    }).then(result => { //parses results and passes to init function
        console.log(result);
    })
}