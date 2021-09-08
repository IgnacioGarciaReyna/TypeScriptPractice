const promise1 = new Promise((resolve, rejected) => {
    let task_done = true;
    if(task_done /**Al no poner == true estamos indicando lo mismo, que es igual a true */ ){
        resolve("Task succesfuly");
    } else {
        rejected("Task invalid");
    }
});

promise1.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})


