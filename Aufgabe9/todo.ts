const todoBeschreibung: HTMLInputElement = document.querySelector("#todoBeschreibung") as HTMLInputElement;
const todoContainer: HTMLElement = document.querySelector("#todoContainer");
const addToDoButton: HTMLButtonElement = document.querySelector("#addTodo");
let aufgabenZaehler: number = 0;


addToDoButton.addEventListener("click", function (): void {

    if (todoBeschreibung.value === "") {
        alert("Ooops.. Please enter your task first!");
    } else {
        let list: HTMLLIElement = document.createElement("li");
        list.innerHTML = todoBeschreibung.value;
        todoContainer.appendChild(list);
        todoBeschreibung.value = "";
        aufgabenZaehler = aufgabenZaehler + 1;
        document.querySelector("h2").innerHTML = aufgabenZaehler + " tasks are ready to get done.";

        const checkBox: HTMLElement = document.createElement("i");
        list.appendChild(checkBox);
        checkBox.classList.add("far", "fa-circle");

        const checkedBox: HTMLElement = document.createElement("i");
        list.appendChild(checkedBox);
        checkedBox.classList.add("far", "fa-check-circle", "isHidden");

        checkBox.addEventListener("click", function (): void {

            checkBox.classList.add("isHidden");
            checkedBox.classList.remove("isHidden");

        });

        checkedBox.addEventListener("click", function (): void {

            checkedBox.classList.add("isHidden");
            checkBox.classList.remove("isHidden");

        });

        const deleteButton: HTMLElement = document.createElement("i");
        list.appendChild(deleteButton);
        deleteButton.classList.add("far", "fa-times-circle");

        deleteButton.addEventListener("click", function (): void {

            list.classList.add("isHidden");
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

todoBeschreibung.addEventListener("keypress", function (keyboardEvent: KeyboardEvent): void {

    if (keyboardEvent.key == "Enter") {

        if (todoBeschreibung.value === "") {
            alert("Ooops.. Please enter your task first!");
        } else {
            let list: HTMLLIElement = document.createElement("li");
            list.innerHTML = todoBeschreibung.value;
            todoContainer.appendChild(list);
            todoBeschreibung.value = "";
            aufgabenZaehler = aufgabenZaehler + 1;
            document.querySelector("h2").innerHTML = aufgabenZaehler + " tasks are ready to get done.";

            const checkBox: HTMLElement = document.createElement("i");
            list.appendChild(checkBox);
            checkBox.classList.add("far", "fa-circle");

            const checkedBox: HTMLElement = document.createElement("i");
            list.appendChild(checkedBox);
            checkedBox.classList.add("far", "fa-check-circle", "isHidden");

            checkBox.addEventListener("click", function (): void {

                checkBox.classList.add("isHidden");
                checkedBox.classList.remove("isHidden");

            });

            checkedBox.addEventListener("click", function (): void {

                checkedBox.classList.add("isHidden");
                checkBox.classList.remove("isHidden");

            });

            const deleteButton: HTMLElement = document.createElement("i");
            list.appendChild(deleteButton);
            deleteButton.classList.add("far", "fa-times-circle");

            deleteButton.addEventListener("click", function (): void {

                list.classList.add("isHidden");
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

