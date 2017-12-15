url='https://flowers.vapor.cloud/flowers'
posturl ='https://flowers.vapor.cloud/flower'
let displayFlowers = document.getElementById('displayFlowers')
$("#addFlowerBtn").on("click", function(){
$.confirm({
    title: 'Add A Flower',
    content: '' +
    '<form action="" class="formName">' +
    '<div class="form-group">' +
    '<label>Flower Name</label>' +
    '<input type="text" placeholder="Flower Name" class="name form-control" id="input-flower" required />' +
    '<label>URL</label>' +
    '<input type="text" placeholder="URL" class="name form-control" id="input-photo" required />' +
    '<label>Description</label>' +
    '<textarea type="text" placeholder="Description" class="name form-control" id="input-photo" required />' +
    '</div>' +
    '</form>',
    buttons: {
        formSubmit: {
            text: 'Submit',
            btnClass: 'btn-blue',
            action: function () {
                let inputFlower = $("#input-flower").val()
                let inputDescription = $("#input-description").val()
                let userData = JSON.stringify({"name": inputFlower, "description": inputDescription, "imageURL":inputPhoto})
                fetch(posturl, {    
                  method: 'POST',
                  headers:{
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                  body: userData   
            })},
        
    },
    Cancel: function () {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
            // if the user submits the form by pressing enter in the field.
            e.preventDefault();
            jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
    }
}})})

  fetch(url)
  .then(function(response){
    return response.json()})
   .then(function(json){
    let output = ""
    for ( index in json) {
    output = `
    <div id="output">
    <div>
    <img class="flowerImg" src="${json[index].imageURL}" />  
</div>
    <li class="flowerName">${json[index].name}</li>
    <li class="flowerDescription">${json[index].description}</li>
    </div>`
    displayFlowers.innerHTML += output
    
    }})
      
