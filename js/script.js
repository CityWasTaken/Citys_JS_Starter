let userData = {
    name: "City",
    age: 27,
    phone: "322-332-3232",
    adress: "32 coding ave",
    info: {
        location: "Jersey area",
        hobbies: ["Music", "Gaming"]
    },
    printAge: function () {
        console.log(this.age);
    },
    haveBirthday: function() {
        // increase age by one
        this.age ++;
        // print "Happy Birthday" tp the console
        console.log("Happy Birthday");
    },
    addHobby: function(){
        // Need to reference and arguement that is passed to addHobby (string of a hobby)
        this.info.hobbies
        // push the arguement(hobby) to the info.hobbies array
        this.info.hobbies.push("dancing");
    },
    printHobbies: function() {
        // console.log the hobbies array
        console.log(this.info.hobbies)
        // BONES - loop over the hobbies array and console.log each hobby

    }
};

userData.printHobbies();
userData.addHobby();
userData.printHobbies();