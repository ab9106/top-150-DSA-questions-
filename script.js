// Function to toggle the visibility of the solution
function toggleSolution(id) {
    const solution = document.getElementById(id);
    if (solution.style.display === "block") {
        solution.style.display = "none";
    } else {
        solution.style.display = "block";
    }
}

// Practice mode: Basic function to simulate code running
function runCode() {
    const userCode = document.getElementById("code-editor").value;
    let output = '';

    try {
        // Running user code (basic simulation, you could use a service like Repl.it for real execution)
        output = eval(userCode); // Warning: eval can be dangerous in production environments
    } catch (e) {
        output = `Error: ${e.message}`;
    }

    document.getElementById("output").textContent = output;
}

// Search functionality for filtering questions
document.getElementById("search").addEventListener("input", function() {
    let searchTerm = this.value.toLowerCase();
    let questions = document.querySelectorAll(".question-card");

    questions.forEach(function(card) {
        let questionTitle = card.querySelector(".question-title").textContent.toLowerCase();
        if (questionTitle.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
