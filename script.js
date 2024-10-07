let numbers = [];
let operations = [];

function updateText(text) {
    const display = document.querySelector("#display");
    display.textContent = display.textContent + text;
}

function clearText() {
    const display = document.querySelector("#display");
    display.textContent = "";
}

function operate(nums, operations) {
    console.log(nums);
    console.log(operations);

    if (nums.length != operations.length+1) {
        clearText();
        updateText("ERROR. PLEASE CLEAR");

    }

    else {

        let total=parseFloat(nums[0]);
        for (let i=1; i<nums.length; i++) {
            if (operations[i-1] === "+") {
                total = total + parseFloat(nums[i]);
            }
            else if (operations[i-1] === "-") {
                total = total - parseFloat(nums[i]);
            }
            else if (operations[i-1] === "x") {
                total = total * parseFloat(nums[i]);
            }
            else {
                total = total / parseFloat(nums[i]);
            }
        }

        clearText();
        updateText(`${total}`);
    }   
}

addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {

        if (e.target.className === "number") {
            updateText(e.target.id);
        }
        else {
            updateText(e.target.id);
            if (e.target.id === '=') {
                numbers = document.querySelector("#display").textContent.slice(0, -1);
                numbers = numbers.replace(/[-x\+\/]/g, ' ').trim();
                numbers = numbers.split(' ');
                operate(numbers, operations);
                operations = [];
            }
            else if (e.target.id === "clear") {
                numbers = [];
                operations = [];
                clearText();
            }
            else {
                operations.push(e.target.id);
            }
        }
    }   
});