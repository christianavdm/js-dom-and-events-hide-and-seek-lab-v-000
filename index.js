function getFirstSelector(selector) {
    return document.querySelector(selector); 
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
    const rankedLists = document.getElementsByClassName('ranked-list'); 
    let li = rankedLists[0]; 
    li.textContent = li.textContent * n; 

    let liOne = rankedLists[1]; 
    liOne.textContent = li.textContent * n; 
}