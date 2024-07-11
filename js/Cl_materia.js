export default class Cl_materia {
    constructor(){
        this.contAprobados=0;
        this.contReprobados=0;
        this.contEstudiantes=0;
        this.acumNota=0;
    }
    procesarEstudiantes(est){
        this.contEstudiantes++;
        if(est.resultado() == "aprobado"){
            this.contAprobados++;
            this.acumNota += est.nota;
        }else{
            this.contReprobados++;
            this.acumNota += est.nota;
        }
    }
    cantidadAprobados(){
        return this.contAprobados;
    }
    cantidadReprobados(){
        return this.contReprobados;
    }
    promedio(){
        return this.acumNota / this.contEstudiantes;
    }
}