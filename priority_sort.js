function dataObject(priority, value){
    this.priority = priority;
    this.value = value;
}

function generateRadomObject(n){
    let list = [undefined]
    for(let idx = 0; idx < 10; idx ++){
        let num = Math.floor((Math.random() * 100) + 1);
        list.push(num);
        if(num % 2 == 0) list.push(undefined);
    }

    objList = list.map(num => new dataObject(num, 'data_'+num));

    return objList;
}

const objArray = generateRadomObject(10);

function sortObjectArray(objArray) {

    objArray = objArray.sort((a,b) => {
        a_priority = a.priority || 0;
        b_priority = b.priority || 0;
        return a_priority > b_priority ? 1 : -1});

    return objArray;
}

console.log('\nORIGINAL ARRAY:');
console.log(objArray,'\n');

let sortedArray = sortObjectArray(objArray);

console.log('\SORTED ARRAY:');
console.log(sortedArray,'\n');