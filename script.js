document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('workouts').innerHTML = `
    <h2>Workouts</h2>
    <p>Explore various workout routines to stay fit and healthy.</p>
    <ul>
        <li>Cardio</li>
        <li>Strength Training</li>
        <li>Flexibility Exercises</li>
        <li>Balance Workouts</li>
    </ul>
`;

document.getElementById('nutrition').innerHTML = `
    <h2>Nutrition</h2>
    <p>Learn about balanced diets and nutrition plans.</p>
    <ul>
        <li>Protein</li>
        <li>Carbohydrates</li>
        <li>Fats</li>
        <li>Vitamins & Minerals</li>
    </ul>
`;

innerHTMLdocument.getElementById('contact').innerHTML = `
<h2>Contact</h2>
<p>Get in touch with us for personalized fitness advice.</p>
<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <br>
    <button type="submit">Submit</button>
</form>
`;
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value / 100; // convert cm to meters
    var bmi = weight / (height * height);
    var resultText = "Your BMI is " + bmi.toFixed(2);
    document.getElementById("result").innerText = resultText;
}