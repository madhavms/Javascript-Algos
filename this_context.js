let obj_count = {
    count: 10,
    displayThis: function(){
        console.log('Normal this:',this); //Normal function has
}
    ,
    arrowdisplayThis: () => {
        console.log('Arrow this:',this);
    }
};
obj_count.displayThis();
obj_count.arrowdisplayThis();