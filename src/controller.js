/* eslint-disable */
export function playMove(column) {
    fetch("http://localhost:9000/insert/" + column, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: "",
    });
}

export function newGame(type) {
    console.log('newGame')
    fetch(`http://localhost:9000/newGame/${type}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: "",
    });
}

export function load() {
    fetch(`http://localhost:9000/load`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: "",
    });
}

export function save() {
    fetch(`http://localhost:9000/save`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: "",
    });
}

export function undo() {
    fetch(`http://localhost:9000/undo`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: "",
    });
}

export function redo() {
    fetch(`http://localhost:9000/redo`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: "",
    });
}

export async function fetchWinningChips() {
    const response = await fetch(`http://localhost:9000/winnerChips`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export function winAnimation(aChips) {
    const iPlayer = aChips.values[0];
    const aChipCoordinates = aChips.values.splice(1, 4);

    const blinkInterval = setInterval(() => {
        aChipCoordinates.forEach(item => {
            const oChipElement = document.getElementById(`${item[0]}.${item[1]}`);
            if (iPlayer === 2) {
                if (oChipElement.classList.contains("text-warning")) {
                    oChipElement.classList.remove("text-warning");
                    oChipElement.classList.add("text-success");
                } else if (oChipElement.classList.contains("text-success")) {
                    oChipElement.classList.remove("text-success");
                    oChipElement.classList.add("text-warning");
                }
            } else if (iPlayer === 1) {
                if (oChipElement.classList.contains("text-danger")) {
                    oChipElement.classList.remove("text-danger");
                    oChipElement.classList.add("text-success");
                } else if (oChipElement.classList.contains("text-success")) {
                    oChipElement.classList.remove("text-success");
                    oChipElement.classList.add("text-danger");
                }
            }
        });
    }, 500);
    setTimeout(() => {
        clearInterval(blinkInterval);
    }, 5000);
}

function suggestion() {
    fetch(`http://localhost:3000/api/suggestions`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: data
    }).then(response => response.json().then((data) => {
        let oElement = document.getElementById("suggestion");
        oElement.innerHTML = `AI suggests Player ${data.player} to play column: ${data.suggestedColumn}`
    }));
}