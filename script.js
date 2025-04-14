var frutas = ["Laranja", "Banana"]

.push() adiciona no final 
frutas.push("maça")

.unshift() - adiciona no começo 
frutas.unshift("uva")

.pop() - remove o ultimo 
 frutas.pop() 

 .shift() - remove o primeiro 
 frutas.shift() 


.splice(1,1)  remove o primeiro indeci "2,1"
 frutas.splice() */


console.log(frutas.indexOf("banana")


const user = prompt("Qual fruta deseja deletar")
const deleteFruta = frutas.indexOf(user)

frutas.slice(deleteFruta, 1)



console.log(frutas)