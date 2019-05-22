'use strict';
(function(){ 
	 
	//Funkcja otwierająca modal:
	var showModal = function(event){
		event.preventDefault();
        //modal-one, modal-two....pobierane z atrybutu href linka
        var choice = this.getAttribute('href');
        var modal = document.querySelector(choice);
        var AllModals = document.querySelectorAll(".modal");
        
        for (var i = 0; i < AllModals.length; i++) {
            AllModals[i].classList.remove('show');
        }
        //dodaje klase show do modala
        modal.classList.add('show');
        //dodaje klase show do overlaya
        document.querySelector('#modal-overlay').classList.add('show');
	};
	
    
    // Petla dla wielu linków otwierających modale
	var modalLinks = document.querySelectorAll('.show-modal');
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}
	
	// Dodajemy funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close". 
    var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	// Umożliwianie zamykania modala poprzez kliknięcie w overlay. 
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
	
	// Blokujemy propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go. 
	
	var modals = document.querySelectorAll('.modal');
    
    for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
})(); 