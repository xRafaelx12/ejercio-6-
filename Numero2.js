export default class numero {
    constructor(Numero1,Numero2,Numero3) {
        this.Numero1 = Numero1;
        this.Numero2 = Numero2;
        this.Numero3 = Numero3;
    
    
    }
    
    
    set Numero1(n) {
        this._Numero1 = +n;
    }
    get Numero1() { 
        return this._Numero1; 
    }
    
    set Numero2(n) {
        this._Numero2 = +n;
    }
    get Numero2() {
         return this._Numero2; 
        }
    
    set Numero3(n) {
        this._Numero3 = +n;
    }
    get Numero3() {
         return this._Numero3 ;
        }

        concatenacion() {
            return this.Numero1 + ',' + this.Numero2 + ',' + this.Numero3 ;

        }

        encontrarNumeroMayor() {
            let mayor = this.Numero1; 
            if (this.Numero2 > mayor) {
                mayor = this.Numero2;
            }
            if (this.Numero3 > mayor) {
                mayor = this.Numero3;
            }
            if (this.Numero4 > mayor) {
                mayor = this.Numero4;
            }
            return mayor;
        }
    
    }
    