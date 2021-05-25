function handleSubmit(event) {
    event.preventDefault()

    // check what URL was put into the form field
    let address = document.getElementById('url').value;
    const data = {
        address
    }
 

    console.log("Form Submitted")
    
// fetch data and update UI if URL is correct 
    if (Client.checkForUrl(address)) {
    fetch('http://localhost:8081/val', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('model').innerHTML = 'Model: ' + res.model;
                document.getElementById('score_tag').innerHTML = 'Score: ' + res.score_tag;
                document.getElementById('agreement').innerHTML = 'Agreement: ' + res.agreement;
                document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
                document.getElementById('confidence').innerHTML = 'Confidence: ' + res.confidence;
                document.getElementById('irony').innerHTML = 'Irony: ' + res.irony;
    })
    .catch((error) => {
        alert("Please provide correct URL!");
    })
}else{
    console.log('error');
    alert("Please provide correct URL!");
}
}
export { handleSubmit }
