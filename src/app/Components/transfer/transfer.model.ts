import { Account } from "../account/Account.modle";

export class Transfer{
    public id:Number=0;
    public account:Account=new Account;
    public transferfrom:string='';
    public transferto:string='';
    // public balance:number=0;
    public phone:string='';
    public amount:number=0;

   
    public transferdate:string='';
    public memo:string='';

}