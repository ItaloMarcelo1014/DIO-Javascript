class contaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }


    get saldo(){
      return this._saldo;
    }

    set saldo(valor) {
          this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negado!!'
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo  + valor;

        return this._saldo;
    }
}

class ContaCorrete extends contaBancaria{
    constructor(agencia, numero , CartaoCredito){
        super(agencia, numero,);
        this.tipo = 'corrente';
        this.CartaoCredito = CartaoCredito;
    }

    get CartaoCredito(){
        return this._CartaoCredito;
    }

    set CartaoCredito(valor){
        this._CartaoCredito = valor;
    }
}

class ContaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Poupança';
    }

    
}


class ContaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitária';
    }


   sacar(valor){
    if( valor > 500){
        return 'Operação negada!!'
    }
    this._saldo = this._saldo - valor;
   }
    
}


