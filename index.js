const  { loadDocs } = require('./libs')
loadDocs().then(data => {
    console.log('>', data);
})