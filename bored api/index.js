fetch ("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then (data=> {
        console.log(data)
        document.getElementById("idea-generator").innerHTML= `<span> ${data.activity} </span`
    })
