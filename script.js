// DOM Elements
const habitInput = document.getElementById("habit-input");
const addBtn = document.getElementById("add-btn");
const habitsList = document.getElementById("habits-list");

// Load habits from localStorage
let habits = JSON.parse(localStorage.getItem("habits")) || [];

// Render habits
function renderHabits() {
    habitsList.innerHTML = "";
    habits.forEach((habit, index) => {
        const habitItem = document.createElement("div");
        habitItem.className = "habit-item";
        habitItem.innerHTML = `
            <span class="habit-name">${habit.name}</span>
            <span class="streak-count">Streak: ${habit.streak} days</span>
            <div class="habit-actions">
                <button class="delete-btn" onclick="deleteHabit(${index})">Delete</button>
            </div>
        `;
        habitsList.appendChild(habitItem);
    });
}

// Add a new habit
addBtn.addEventListener("click", () => {
    const habitName = habitInput.value.trim();
    if (habitName) {
        habits.push({ name: habitName, streak: 0 });
        localStorage.setItem("habits", JSON.stringify(habits));
        habitInput.value = "";
        renderHabits();
    }
});

// Delete a habit
function deleteHabit(index) {
    habits.splice(index, 1);
    localStorage.setItem("habits", JSON.stringify(habits));
    renderHabits();
}

// Initialize
renderHabits();