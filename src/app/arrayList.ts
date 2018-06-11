export class booking{

    firstname;
    lastname;
    email;
    phonenumber;
    arrivaldate;
    departuredate;
    children;
    adults;


    constructor(firstname,lastname,email,phonenumber,arrivaldate,departuredate,children,adults){
        this.firstname =firstname;
        this.lastname =lastname;
        this.phonenumber =phonenumber;
        this.arrivaldate =arrivaldate;
        this.departuredate =departuredate;
        this.children =children;
        this.adults =adults;

    }


}