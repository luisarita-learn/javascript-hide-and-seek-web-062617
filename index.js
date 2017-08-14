//Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
function getFirstSelector(selector){
    return document.querySelector(selector)
}

//Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
function nestedTarget() {
    return document.querySelector("#nested").querySelector(".target")
}

//Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
function deepestChild() {
    let deepestElement = document.querySelector("#grand-node")
    let children = deepestElement.children
    while (children != 'undefined' && children.length > 0){
        deepestElement = children[0]
        children = deepestElement.children
    }
    return deepestElement
}

//Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
    debugger
    let list = document.querySelectorAll(".ranked-list")
    for (let i = 0; i < list.length; ++i){
        let listItems = list[i].querySelectorAll("li")
        for (let j = 0; j < listItems.length; ++j){
            let currentValue = listItems[j].innerHTML
            let newValue = parseInt(currentValue) + n
            listItems[j].innerHTML = newValue
        }        
    }
}


//increaseRankBy(3)