const { promisify } = require('util');
const glob = promisify(require('glob'))
const { readFile } = require('fs');
const readAFile = promisify(readFile);
const marked = require('meta-marked');
var renderer = new marked.Renderer();


const loadDocs = async () => {
    let files = await glob('./docs/*.md')

    const markdownPromises = files.map(file => readAFile(file, 'utf-8'));

    const docs = await Promise.all(markdownPromises);

    const markdownDocs = docs.map(content => marked(content, {renderer: renderer}))


    return markdownDocs;
}

exports.loadDocs = loadDocs