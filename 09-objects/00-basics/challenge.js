- Complete the `createCourse` function. This function should:
    - take three arguments that will define course properties
        - courseTitle (string)
        - courseDuration (string)
        - courseStudents (array)
    - return an object that has each property assigned its proper value

    For example:
    ```javascript
    createCourse('Bloc Front-End Engineering', '4 weeks', ['Joe', 'Tim', 'Rob'])
    // should return {title: 'Bloc Front-End Engineering', duration: '4 weeks', students: ['Joe', 'Tim', 'Rob']}
    ```

module.exports.createCourse = {
    Title:'Bloc Front End Engineering' ,
    Duration:' 4 weeks',
    Students: ['Joe', 'Tim', 'Rob']
};




- Complete the `addProperty` function. This function should:
    - Take three arguments:
        - `object`: an object to add a properties to
        - `newProp`: a property that we want to add to the object
        - `newValue`: a value that we want the new property to have
    - If `object` doesn't already have a property named `newProp`, then add `newProp` with value of `newValue` to `object`
    - If `object` already has `newProp`, return the `object` argument.

    For example:
    ```javascript
    addProperty({}, 'firstName', 'Jim') // should return { firstName: 'Jim' }
    addProperty({firstName: 'Rob'}, 'firstName', 'Jim') // should return {firstName: 'Rob'}
    ```
module.exports.addProperty = {
... object: 'sign',
... newProp: 'lakeland',
... newValue: '5 million'
... };








module.exports.formLetter = undefined;

module.exports.canIGet = undefined;