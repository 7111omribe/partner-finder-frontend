const paramToInt = (formCleanedData, paramName) => {
    if (formCleanedData[paramName]) {
        formCleanedData[paramName] = parseInt(formCleanedData[paramName])
    }
    return formCleanedData
}

export { paramToInt }