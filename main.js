// 1 завдання
// його можна виконати 2 підходами:
// - Імперативним підходом та
// - Декларативним підходом
// Мені зручніше використати декларативний

const users1 = [
    {name: "Олександр", age: 30},
    {name: "Марія", age: 25},
    {name: "Петро", age: 27}
];

const names = users1.map(user => user.name);

console.log(names)

//Тетяно, вибачте, я трохи погуглив я просто не пам'ятаю як можна його зробити.
// Я погуглив методи і знайшов метод .map він створює новий масив з іменами користувачів (В данному випадку)

//2 завдання
// const eyeColors = [
//     {name: "Олександр", eyeColor: "green"},
//     {name: "Марія", eyeColor: "white-blue"},
//     {name: "Петро", eyeColor: "brown"}
// ];

// //А і ще, якщо ви подумаєте що я списав, то не думайте
// //Я чесно всі методи які я знайшов в інтернеті вивчив, все роблю сам
// //Якщо сумніваєтесь то перепитаєте мене на уроці 🤗🤗

// const eyeColorFilter = "green" //Колір очей за яким буде здійснено фільтрацію

// const filteredUsers = eyeColor.filter(user => user.eyeColor === eyeColorFilter);
// console.log(filteredUsers);


//Вибачте, 2 завдання трохи затупив. Поки що йду далі...

//3 завдання

const users = [
    { name: "Олександр", age: 30, gender: "male" },
    { name: "Марія", age: 25, gender: "female" },
    { name: "Петро", age: 27, gender: "male" }
];

const genderFilter = "female"; // Стать, за якою буде здійснено фільтрацію

const filteredNames = users.map(user => user.gender);

console.log(filteredNames);

//4 завдання (рівень складності 2/10)

const users3 = [
    { name: "Олександр", age: 30, isActive: true },
    { name: "Марія", age: 25, isActive: false },
    { name: "Петро", age: 27, isActive: true },
    { name: "Ірина", age: 22, isActive: false }
];

const inactiveUsers = users3.filter(user => !user.isActive);

console.log(inactiveUsers);

//Пояснюю що таке метод .filter - це метод який використовується для створення нового масиву з елементами
//Він викликається на масиві і приймає функцію зворотного виклику (callback), яка виконується для
// кожного елемента масиву. Якщо функція повертає true, то цей елемент буде відклю до нового масиву. Якщо false, то елемент буде відкинутий.


//Дивіться, своїми словами. В чому прикол, в данній змінній inactiveUsers ми кажемо що у масиві users (ми кажемо за допомогою методу .filter) що user 
// це назва змінної, яка представляє кожен об'єкт у цьому масиві під час перебору функцією filter