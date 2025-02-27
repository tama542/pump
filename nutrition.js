document.getElementById('nutritionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mealName = document.getElementById('mealName').value;
    const calories = parseInt(document.getElementById('calories').value);
    const protein = parseInt(document.getElementById('protein').value);
    const carbs = parseInt(document.getElementById('carbs').value);
    const fat = parseInt(document.getElementById('fat').value);

    const mealList = document.getElementById('mealList');
    const mealItem = document.createElement('div');
    mealItem.innerHTML = `
        <h4>${mealName}</h4>
        <p>Calories: ${calories}</p>
        <p>Protein: ${protein} g</p>
        <p>Carbs: ${carbs} g</p>
        <p>Fat: ${fat} g</p>
    `;
    mealList.appendChild(mealItem);

    updateTotals(calories, protein, carbs, fat);

    document.getElementById('nutritionForm').reset();
});

function updateTotals(calories, protein, carbs, fat) {
    const totalCalories = document.getElementById('totalCalories');
    const totalProtein = document.getElementById('totalProtein');
    const totalCarbs = document.getElementById('totalCarbs');
    const totalFat = document.getElementById('totalFat');

    totalCalories.innerText = parseInt(totalCalories.innerText) + calories;
    totalProtein.innerText = parseInt(totalProtein.innerText) + protein;
    totalCarbs.innerText = parseInt(totalCarbs.innerText) + carbs;
    totalFat.innerText = parseInt(totalFat.innerText) + fat;
}