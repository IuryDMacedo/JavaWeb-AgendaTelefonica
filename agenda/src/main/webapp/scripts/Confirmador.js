/**
 * confirmação de exclusão de um contato
 * @author iury macedo
 * @param idcon
 */

 function confirmar(idcon){
	 let resposta = confirm("Confirma a Exclusão deste contato?")
	 if(resposta === true){
		 window.location.href="delete?idcon="+idcon
	 }
 }