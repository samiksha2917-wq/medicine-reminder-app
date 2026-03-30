let medicines = JSON.parse(localStorage.getItem("meds")) || [];

function saveData() {
    localStorage.setItem("meds", JSON.stringify(medicines));
}

function addMedicine() {
    let name = document.getElementById("name").value;
    let dosage = document.getElementById("dosage").value;
    let time = document.getElementById("time").value;

    if(name === "" || dosage === "" || time === "") {
        alert("Fill all fields!");
        return;
    }

    medicines.push({
        name,
        dosage,
        time,
        status: "Pending"
    });

    saveData();
    display();
}

function display() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    medicines.forEach((med, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            <b>${med.name}</b> (${med.dosage}) - ${med.time} <br>
            Status: ${med.status} <br>
            <button onclick="markTaken(${index})">Taken</button>
            <button onclick="markMissed(${index})">Missed</button>
            <button onclick="deleteMed(${index})">Delete</button>
        `;

        list.appendChild(li);
    });
}

function markTaken(i) {
    medicines[i].status = "Taken";
    saveData();
    display();
}

function markMissed(i) {
    medicines[i].status = "Missed";
    saveData();
    display();
}

function deleteMed(i) {
    medicines.splice(i, 1);
    saveData();
    display();
}

display();
