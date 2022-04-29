function data_object(priority, value){
    this.priority = priority;
    this.value = value;
}

function generate_radom_objects(n){
    let list = [undefined]
    for(let idx = 0; idx < 10; idx ++){
        let num = Math.floor((Math.random() * 100) + 1);
        list.push(num);
        if(num % 2 == 0) list.push(undefined);
    }

    obj_list = list.map(num => new data_object(num, 'data_'+num));

    return obj_list;
}

const obj_array = generate_radom_objects(10);

function sort_object_array(obj_array) {
    console.log('\nORIGINAL ARRAY:');
    console.log(obj_array,'\n');
    obj_array = obj_array.sort((a,b) => {

        a_priority = a.priority;
        b_priority = b.priority;
        if(a_priority == undefined){
            a_priority = 0;
        }
        if(b_priority == undefined){
            b_priority = 0;
        }
        return a_priority > b_priority ? 1 : -1});
    console.log('\nSORTED ARRAY:');
    console.log(obj_array,'\n');
}

sort_object_array(obj_array);