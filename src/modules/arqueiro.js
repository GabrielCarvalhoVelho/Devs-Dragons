import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem {
    elementoMagico
    levelMagico
    destreza
    tipo = 'Arqueiro'

   constructor(nome, level, elementoMagico, levelMagico, destreza) {
        super(nome, level)
         this.elementoMagico = elementoMagico
         this.levelMagico = levelMagico
         this.destreza =  destreza
    }
    
     obterInsignia(){
        if(this.levelMagico >= 5 && this.destreza >= 5) {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }

 }