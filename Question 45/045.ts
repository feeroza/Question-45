
// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.



function carInfo(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...additionalInfo.reduce((acc, item) => ({ ...acc, ...item }), {})
    };

    return carInfo;
}

const carObject = carInfo("Honda", "Civix", { color: "black" }, { optionalFeature: "petrol free" });

console.log(carObject);



