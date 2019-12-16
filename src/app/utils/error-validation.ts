export class ErrorValidation{
  readonly requerid:string="Este Campos es Requerido";
  readonly emailFormat:string ="Formato de email invalido"
  outRanged(min:Number,max:Number):string{
     return max!=min?"Solo se permite entre ("+min+"-"+max+") caracteres":"Solo se permite ("+min+") caracteres";
 }
  readonly characterValid:string="La cadena contiene caracteres no validos";
  readonly onlyNumber:string="Solo se permite numeros"
}