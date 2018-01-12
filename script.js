var monTableau = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

document.getElementById('mesbouttons').addEventListener("click", function (event) {
        var monChiffre = parseInt(document.getElementById('input').value)
        var aCrypter = document.getElementById('entree').value
        var sortie = document.getElementById('sortie')
        sortie.innerHTML='';
        
        if (event.target.id == 'crypter')
        { 
                
                if(!monChiffre) 
                { alert('No incrementation bcs no key') 
                sortie.innerHTML = aCrypter
                return;
        }
        //for each letter
        for (var maLettre of aCrypter){   
                var itsTransformed = false; 
                // var maLettre =  aCrypter.substring(i,i+1)
                
                if (maLettre === ' ') { 
                        sortie.innerHTML += ' '
                        itsTransformed = true;
                }
                
                // for each entry in []
                for (const k in monTableau)  {
                        var  newLetterIndex = (parseInt(k) + monChiffre)%monTableau.length; 
                        if (maLettre == monTableau[k]){
                                
                                sortie.innerHTML += monTableau[newLetterIndex]; 
                                itsTransformed = true;
                        }  
                        
                        if ( maLettre == monTableau[k].toUpperCase())  { 
                                
                                sortie.innerHTML += monTableau[newLetterIndex].toUpperCase(); 
                                itsTransformed = true;
                        }                                
                }
                
                if (!itsTransformed)  sortie.innerHTML += maLettre;
        }    
}

if (event.target.id == 'decrypter')  { 
        console.log ('decrypté')
        
        // if no crypt key, print all possibilities
        if(!monChiffre) { 
                
                for (let q = 0; q < monTableau.length; q++) {
                        monChiffre = q; 
                        console.log(monChiffre)
                        sortie.innerHTML += ' <br> -Si la clef était '+ monChiffre +' : '
                        //same as below until the end 
                        //for each letter
                        for (var i =0 ; i < aCrypter.length; i++) {   
                                var itsTransformed = false;
                                var maLettre =  aCrypter.substring(i,i+1)
                                
                                if (maLettre === ' ') { 
                                        sortie.innerHTML += ' ';
                                        itsTransformed = true;
                                }
                                
                                // for each entry in []
                                for (const k in monTableau)  {
                                        
                                        var  newLetterIndex = (parseInt(k) - monChiffre)%monTableau.length; 
                                        if (newLetterIndex < 0 ) {newLetterIndex += monTableau.length;}
                                        
                                        
                                        if (maLettre == monTableau[k]){
                                                
                                                sortie.innerHTML += monTableau[newLetterIndex]; 
                                                itsTransformed = true;
                                        }  
                                        
                                        if ( maLettre == monTableau[k].toUpperCase())  { 
                                                
                                                sortie.innerHTML += monTableau[newLetterIndex].toUpperCase();               itsTransformed = true;
                                                
                                        }
                                }   
                                
                                if (!itsTransformed)  sortie.innerHTML += maLettre
                        }         
                }
                return;
        }
        
        
        // if crypt key 
        for (var i =0 ; i < aCrypter.length; i++) {   
                var ItsChanged = false;
                var maLettre =  aCrypter.substring(i,i+1)
                
                if (maLettre === ' ') { 
                        sortie.innerHTML += ' ';
                        ItsChanged= true;
                }
                
                // for each entry in []
                for (const k in monTableau)  {
                        
                        var  newLetterIndex = (parseInt(k) - monChiffre)%monTableau.length; 
                        if (newLetterIndex < 0 ) {newLetterIndex += monTableau.length;}
                        
                        
                        if (maLettre == monTableau[k]){
                                
                                sortie.innerHTML += monTableau[newLetterIndex]; 
                                ItsChanged= true;
                        }  
                        
                        if ( maLettre == monTableau[k].toUpperCase())  { 
                                
                                sortie.innerHTML += monTableau[newLetterIndex].toUpperCase(); 
                                ItsChanged= true;
                        }
                }   
                
                if (!ItsChanged)  sortie.innerHTML += maLettre
        }      
}
});

document.getElementById('clickcopy').addEventListener('click', function () {

        var copyText = document.querySelector('#sortie');
        
        //create a select on my node
        var range = document.createRange();
        range.selectNode(copyText);
        //remove all old selections
        window.getSelection().removeAllRanges();
        //select what i want
        window.getSelection().addRange(range);
        
        try {
                var successful = document.execCommand('copy');
        } catch(err) {
                window.prompt("Copy to clipboard: Ctrl+C/Cmd+C, Enter", copyText.innerHTML);
        }
        
});