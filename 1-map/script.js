document.addEventListener("DOMContentLoaded", () => {

    const users = [
        {id: 1, name: 'Вася'},
        {id: 2, name: 'Петя'},
        {id: 1, name: 'Вася'},
    ]

    const setUsers = [...new Set(users.map(user => users.find(u => u.id === user.id)))];

    console.log(setUsers);

})