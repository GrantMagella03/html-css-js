/**
 * Create a Friend class with the following properties
 * - name (string)
 * - email (string)
 * - phone (string)
 *
 * Create an collection of 3 to 5 friends with any values.
 *
 * Iterate through the collection and display each friend
 * in the console.
 */
class Friend{
    name;
    email;
    phone;
    Constructor(name="Unnamed",email="N/A",phone="N/A"){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
const Friends = [new Friend("Tim"),new Friend("Jim","Jim@Email.com"), new Friend("Kim","Kim@Email.com","(555)899-9989"), ]
for (let i of Friends){
    console.log(i.name," ",i.email," ",i.phone);
}