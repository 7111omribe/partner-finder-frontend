const paramToInt = (formCleanedData, paramName) => {
    if (formCleanedData[paramName]) {
        formCleanedData[paramName] = parseInt(formCleanedData[paramName])
    }
    return formCleanedData
}

const searchInnerPath = (item, path)=>{
    const pathParts = path.split('.');
    let inner = item;
    for (const pathPart of pathParts){
        inner = inner[pathPart];
    }
    return inner;
}

export { paramToInt, searchInnerPath }