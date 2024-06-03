const mutiMongooseToObject = (array) => {
    return array.map(array => array.toObject());
}
const mongooseToObject = (object) => {
    return object ? object.toObject() : object;
}
export {mutiMongooseToObject, mongooseToObject}