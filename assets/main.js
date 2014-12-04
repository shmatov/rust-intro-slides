window.onload = function() {
    [].slice.call(document.querySelectorAll('.slide pre code')).forEach(function(x){
        highlightSource(x, x.dataset['language']);
    });
};

function highlightSource(block, lang) {
    var sourceLines = block.innerText.split('\n');
    //remove empty lines
    while (!sourceLines[0].trim()) sourceLines.shift();
    while (!sourceLines[sourceLines.length - 1].trim()) sourceLines.pop();

    var basisIndent = sourceLines[0].search(/\S/);
    var source = document.createDocumentFragment();
    sourceLines.forEach(function(line) {
        var elem = document.createElement('code');
        elem.classList.add('language-' + lang);
        elem.innerText = line.substr(basisIndent);
        hljs.highlightBlock(elem);
        source.appendChild(elem);
    });
    block.parentNode.replaceChild(source, block);
}
