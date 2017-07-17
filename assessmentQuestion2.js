(function(){    

    // $().on('drop', function dropToMenu(event) {
    //     var draggedElementID = event.dataTransfer.getData('id');
    //     console.log(event);
    //     var draggedElement = document.getElementById(draggedElementID);
    //     var value = $('#'+draggedElementID+' span').html();
    //     updateList(value, 'decrease');
    //     event.target.appendChild(draggedElement);
    // }

    function updateList(value, operation) {
        var totalValue = $('#totalValue');
        var totalItems = $('#totalItems'),
            tempTotal,
            tempTotalItems;
        if(operation==='increase') {
            tempTotal = parseInt(totalValue.html())+parseInt(value);
            tempTotalItems = parseInt(totalItems.html()) + 1;
        }
        else if(operation==='decrease') {
            tempTotal = parseInt(totalValue.html()) - parseInt(value);
            tempTotalItems = parseInt(totalItems.html()) - 1;
        }
        totalValue.html(tempTotal);
        totalItems.html(tempTotalItems);
    }

    function bindvents() {
        $('ul').on('dragstart', 'li', function dragItem(event) {
            // console.log($(this));
            event.originalEvent.dataTransfer.setData('id', event.originalEvent.target.id);
            // $(this).data('id',event.target.id);
        });

        $('ul').on('drop', function dropToCart(event, ui) {
            console.log(event.originalEvent.dataTransfer.getData('id'));
            var draggedElementID = event.dataTransfer.getData('id');
            var draggedElement = document.getElementById(draggedElementID);
            var value = $('#'+draggedElementID+' span').html();
            var cartList = $('cart');
            updateList(value, 'increase');
            event.target.appendChild(draggedElement);

        })

        $('ul').on('dragover', function dragOver(event) {
            event.preventDefault();
        })
    }

    function init() {
        bindvents();
    }

    init();
})()

    