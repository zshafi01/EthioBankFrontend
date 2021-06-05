import { Account } from "../account/Account.modle";
import { User } from "../login/user.model";

export class CustomerInfo{
    public id:Number=0;
    public firstName:string="";
    public lastName:string="";
    public email:string="";
    public phone:string="";
    public address:string="";
    public ssn:string="";
    public user:User=new User;
    public accounts:Account[]=[]
    
}