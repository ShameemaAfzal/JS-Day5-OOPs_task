class Person {
    constructor(firstname = '', lastname = '', email = '', mobileno = '', age = '', occupation = '', address = '', city= '', state = '', country = '', zipcode = '', gender = '', nationality = ''){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobileno = mobileno;
        this.age = age;
        this.occupation = occupation;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipcode = zipcode;
        this.gender = gender;
        this.nationality = nationality;
    }
    getInfo(){
        console.log("First Name:", this.firstname)
        console.log("Last Name:", this.lastname)
        console.log("Email Address:", this.email)
        console.log("Mobile No:", this.mobileno)
        console.log("Age:", this.age)
        console.log("Occupation:", this.occupation)
        console.log("Address:", this.address)
        console.log("City:", this.city)
        console.log("State:", this.state)
        console.log("Country:", this.country)
        console.log("Zipcode:", this.zipcode)
        console.log("Gender:", this.gender)
        console.log("Nationality:", this.nationality)
    }
}

const info = new Person("Shameema","Afzal","shameemakamil97@gmail.com", 1234567890, 27, "Software Developer", "velachery", "chennai", "Tamilnadu", "India", "600042", "Female", "Indian");
info.getInfo()