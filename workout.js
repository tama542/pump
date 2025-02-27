class Workout {
    constructor(exercises, duration, difficulty) {
        this.exercises = exercises;
        this.duration = duration;
        this.difficulty = difficulty;
    }

    displayWorkout() {
        return `
            <p>Exercises: ${this.exercises.join(", ")}</p>
            <p>Duration: ${this.duration} minutes</p>
            <p>Difficulty: ${this.difficulty}</p>
        `;
    }
}

document.getElementById('workoutForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fitnessLevel = document.getElementById('fitnessLevel').value;
    const goal = document.getElementById('goal').value;

    let exercises, duration, difficulty;

    if (fitnessLevel === 'beginner') {
        duration = 20;
        difficulty = 'Beginner';
        if (goal === 'strength') {
            exercises = ['Push-ups', 'Squats', 'Lunges'];
        } else if (goal === 'Weight-loss') {
            exercises = ['Jogging', 'Jumping Jacks', 'High Knees'];
        } else if (goal === 'flexibility') {
            exercises = ['Stretching', 'Yoga Poses', 'Pilates'];
        }
    } else if (fitnessLevel === 'intermediate') {
        duration = 40;
        difficulty = 'Intermediate';
        if (goal === 'strength') {
            exercises = ['Pull-ups', 'Deadlifts', 'Bench Press'];
        } else if (goal === 'Weight-loss') {
            exercises = ['Running', 'Cycling', 'Rowing'];
        } else if (goal === 'flexibility') {
            exercises = ['Dynamic Stretching', 'Advanced Yoga', 'Plyometrics'];
        }
    } else if (fitnessLevel === 'advanced') {
        duration = 60;
        difficulty = 'Advanced';
        if (goal === 'strength') {
            exercises = ['Snatch', 'Clean and Jerk', 'Weighted Squats'];
        } else if (goal === 'Weight-loss') {
            exercises = ['Marathon Training', 'Triathlon Training'];
        } else if (goal === 'flexibility') {
            exercises = ['Advanced Pilates', 'Acrobatics', 'Gymnastics'];
        }
    }

    const workout = new Workout(exercises, duration, difficulty);
    document.getElementById('workoutDisplay').innerHTML = workout.displayWorkout();
})