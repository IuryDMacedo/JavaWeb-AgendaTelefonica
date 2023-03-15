/**
 * validação de formutario
 * @author Iury Macedo
 */

function validar(){
	let nome = frmContato.nome.value
	let telefone = frmContato.telefone.value
	
	if(nome === ""){
		alert("Preencha o campo nome!")
		frmContato.nome.focus()
		return false
		
	}else if(telefone === ""){
		alert("Preencha o campo telefone")
		frmContato.telefone.focus()
		return false
	}else{
		document.forms["frmContato"].submit()
	}
	
	
	
}
