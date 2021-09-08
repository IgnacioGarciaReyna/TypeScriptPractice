interface Iuser {
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
}

const userList: Iuser[] = [
    {
        nombre: "Nacho",
        apellido: "Reyna",
        edad: 27,
        email: "nacho@live.com"
    },
    {
        nombre: "Ignacio",
        apellido: "Garcia",
        edad: 21,
        email: "ignacio@live.com"
    },
    {
        nombre: "El",
        apellido: "Bromas",
        edad: 52,
        email: "bromas@live"
    },
    {
        nombre: "Banana",
        apellido: "en Pijama",
        edad: 10,
        email: "banana@live.com"
    },
];

let newUserList = userList.map(function (value, index: number) {
    let nombreCompleto = `${value.nombre} ${value.apellido}`;
    let birthYear = new Date().getFullYear() - value.edad;

    let newEmail = value.email;
    if(newEmail.indexOf(".") == -1) {
        newEmail = `${newEmail}.com`;
    }

    let newObject = {
        nombreCompleto: nombreCompleto,
        birthYear: birthYear,
        newEmail: newEmail,
    }

    return newObject;

    // console.log(nombreCompleto);
    // console.log(birthYear);
    // console.log(newEmail);
});

console.log(newUserList);