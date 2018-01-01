function addItem(item){
    return {
        type: 'ADD_ITEM',
        item // this is new ES6 shorthand for when the key is the same as a variable or perameter within the scope of the object. It's the same as item: item
    }
}