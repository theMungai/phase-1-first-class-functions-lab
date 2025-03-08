// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
    
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function(multiplier){
        return multiplier * fare
    }
}

const fareDoubler = function(fare){
    createFareMultiplier(fare)

    return fare * 2
}

const fareTripler = function(fare){
    createFareMultiplier(fare)

    return fare * 3
}

function selectDifferentDrivers(drivers, driverFunction){
    return driverFunction(drivers)
}
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'],returnFirstTwoDrivers)