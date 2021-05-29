var todoBeschreibung = document.querySelector("#todoBeschreibung");
var todoContainer = document.querySelector("#todoContainer");
var addToDoButton = document.querySelector("#addTodo");
var aufgabenZaehler = 0;
addToDoButton.addEventListener("click", function () {
    if (todoBeschreibung.value === "") {
        alert("Ooops.. Please enter your task first!");
    }
    else {
        var list_1 = document.createElement("li");
        list_1.innerHTML = todoBeschreibung.value;
        todoContainer.appendChild(list_1);
        todoBeschreibung.value = "";
        aufgabenZaehler = aufgabenZaehler + 1;
        document.querySelector("h2").innerHTML = aufgabenZaehler + " tasks are ready to get done.";
        var checkBox_1 = document.createElement("i");
        list_1.appendChild(checkBox_1);
        checkBox_1.classList.add("far", "fa-circle");
        var checkedBox_1 = document.createElement("i");
        list_1.appendChild(checkedBox_1);
        checkedBox_1.classList.add("far", "fa-check-circle", "isHidden");
        checkBox_1.addEventListener("click", function () {
            checkBox_1.classList.add("isHidden");
            checkedBox_1.classList.remove("isHidden");
        });
        checkedBox_1.addEventListener("click", function () {
            checkedBox_1.classList.add("isHidden");
            checkBox_1.classList.remove("isHidden");
        });
        var deleteButton = document.createElement("i");
        list_1.appendChild(deleteButton);
        deleteButton.classList.add("far", "fa-times-circle");
        deleteButton.addEventListener("click", function () {
            list_1.classList.add("isHidden");
            aufgabenZaehler = aufgabenZaehler - 1;
            document.querySelector("h2").innerHTML = aufgabenZaehler + " tasks are ready to get done.";
            if (aufgabenZaehler == 1) {
                document.querySelector("h2").innerHTML = aufgabenZaehler + " task is ready to get done.";
            }
        });
        if (aufgabenZaehler == 1) {
            document.querySelector("h2").innerHTML = aufgabenZaehler + " task is ready to get done.";
        }
    }
});
// DIE GLEICHE VORGEHENSWEITER NOCHMALS MIT KEYPRESS EVENTLISTNER!
todoBeschreibung.addEventListener("keypress", function (keyboardEvent) {
    if (keyboardEvent.key == "Enter") {
        if (todoBeschreibung.value === "") {
            alert("Ooops.. Please enter your task first!");
        }
        else {
            var list_2 = document.createElement("li");
            list_2.innerHTML = todoBeschreibung.value;
            todoContainer.appendChild(list_2);
            todoBeschreibung.value = "";
            aufgabenZaehler = aufgabenZaehler + 1;
            document.querySelector("h2").innerHTML = aufgabenZaehler + " tasks are ready to get done.";
            var checkBox_2 = document.createElement("i");
            list_2.appendChild(checkBox_2);
            checkBox_2.classList.add("far", "fa-circle");
            var checkedBox_2 = document.createElement("i");
            list_2.appendChild(checkedBox_2);
            checkedBox_2.classList.add("far", "fa-check-circle", "isHidden");
            checkBox_2.addEventListener("click", function () {
                checkBox_2.classList.add("isHidden");
                checkedBox_2.classList.remove("isHidden");
            });
            checkedBox_2.addEventListener("click", function () {
                checkedBox_2.classList.add("isHidden");
                checkBox_2.classList.remove("isHidden");
            });
            var deleteButton = document.createElement("i");
            list_2.appendChild(deleteButton);
            deleteButton.classList.add("far", "fa-times-circle");
            deleteButton.addEventListener("click", function () {
                list_2.classList.add("isHidden");
                aufgabenZaehler = aufgabenZaehler - 1;
                document.querySelector("h2").innerHTML = aufgabenZaehler + " tasks are ready to get done.";
                if (aufgabenZaehler == 1) {
                    document.querySelector("h2").innerHTML = aufgabenZaehler + " task is ready to get done.";
                }
            });
        }
        if (aufgabenZaehler == 1) {
            document.querySelector("h2").innerHTML = aufgabenZaehler + " task is ready to get done.";
        }
    }
});
//# sourceMappingURL=todo.js.map