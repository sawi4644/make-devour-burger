$(function(){
    $('#button').on('click', function(event){
        event.preventDefault()
        let newBurger = {
            burger_name: $('#user').val(),
            devoured: false,
    
    }

        $.ajax('/api/burger', {
            type: 'POST',
            data: newBurger,
        }).then(function () {            
            location.reload();
            
            console.log('Posted')
        
        })
    });
   
   
    $('.devour').on('click', function(event) {
        event.preventDefault()
        let id = event.target.id
        let newBurger = {
            burger_name: event.target.burger_name,
            devoured: true
        }
        console.log(event.target.id)
        $.ajax('api/burger/' + id, {
            type: 'PUT',
            data: newBurger

        }).then( function() {
            console.log('Devoured burger' + id)
            location.reload()

        })
    })
})