const paramToInt = (formCleanedData, paramName) => {
    if (formCleanedData[paramName]) {
        formCleanedData[paramName] = parseInt(formCleanedData[paramName])
    }
    return formCleanedData
}

const searchInnerPath = (item, path) => {
    const pathParts = path.split('.');
    let inner = item;
    for (const pathPart of pathParts) {
        inner = inner[pathPart];
    }
    return inner;
}

function renameObjectProperties(obj, renamingObject) {
    for (let oldProperty in renamingObject) {
        if (renamingObject.hasOwnProperty(oldProperty)) {
            const newProperty = renamingObject[oldProperty];

            // Check if the property to be renamed exists in the object
            if (obj.hasOwnProperty(oldProperty)) {
                // Rename the property
                obj[newProperty] = obj[oldProperty];
                delete obj[oldProperty];
            } else {
                console.warn(`Property '${oldProperty}' not found in the object.`);
            }
        }
    }
}

export { paramToInt, searchInnerPath, renameObjectProperties }