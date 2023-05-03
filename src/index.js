import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)

const arqueiroBruno = new Arqueiro('Bruno', 6, 10)

const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8)

//arqueiroBruno.#level = 15

const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico]

new PersonagemView(personagens).render()

//console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))
console.log(arqueiroBruno)