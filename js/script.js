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
    addHobby: function(hobby) {
        // Need to reference and arguement that is passed to addHobby (string of a hobby)

        // push the arguement(hobby) to the info.hobbies array
        this.info.hobbies.push(hobby);
    },
    printHobbies: function() {
        // console.log the hobbies array
        console.log(this.info.hobbies);
        // BONES - loop over the hobbies array and console.log each hobby
        for (let hobby of this.info.hobbies) {
            console.log(hobby);
        }
    }
};

userData.printHobbies();
userData.printHobbies();
userData.addHobby("golf");
userData.addHobby("golf");
userData.addHobby("golf");
userData.printHobbies();