var fetch = require('node-fetch');

const handleSubmit = (event) => {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('url').value
    if(Client.checkForUrl(formText)) { // check if it's a valid url
        fetch('http://localhost:8080/api/add_url', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: 
                JSON.stringify({url: formText})
        })
        .then(res => {
            console.log("res => ", res)
            return res.json()
        })
        .then(res => {
            document.getElementById('polarity').innerHTML = `<p>Polarity: <span>${res.data.score_tag}<span></p>`;
            document.getElementById("agreement").innerHTML = `<p>Agreement: <span>${res.data.agreement}<span></p>`;
            document.getElementById("subjectivity").innerHTML = `<p>Subjectivity: <span>${res.data.subjectivity}<span></p>`;
            document.getElementById("confidence").innerHTML = `<p>Confidence: <span>${res.data.confidence}<span></p>`;
            document.getElementById("irony").innerHTML = `<p>Irony: <span>${res.data.irony}<span></p>`;

            document.getElementById('url').value = ""   
        })
        .catch(err => {
            console.log(err)
            document.getElementById('error').innerHTML = "There was an error processing your request!"
            document.getElementById('url').value = ""
        })
    } else {
        document.getElementById('error').innerHTML = "Try a valid url!"
        document.getElementById('url').value = ""
    }
}

export { handleSubmit }
