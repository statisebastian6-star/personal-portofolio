import { ImageWithFallback } from "../components/ImageWithFallback";
import bmiAppImg from "../../imports/image-14.png";

export function SoftwareDevelopmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      <div className="mb-12">
        <h1 className="mb-4">Software Development</h1>
        <p className="text-lg max-w-3xl">
          The Software Development Page focuses on the thinking behind code — planning, logic design, defensive programming, and decomposing problems into reusable parts. While the Web Development Page shows the implementation of features, this page shows software engineering thinking applied to a standalone Python program I built from scratch. The project below is small in size but demonstrates a wide range of foundational software engineering concepts.
        </p>
      </div>

      <section className="mb-12 md:mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#17B3A6]"></div>
          <h2>BMI Calculator – Python</h2>
        </div>
        <p className="text-lg mb-6 md:mb-8 max-w-3xl">
          A BMI Calculator I built in Python from scratch as part of my portfolio work. The program asks the user for their height and weight, validates the input defensively against common error cases (non-numeric input, zero, negative numbers), calculates BMI using the standard formula, classifies the result into one of four health categories, and lets the user run multiple calculations in one session. I chose this project because it connects to my personal interest in fitness and weight training, and because it lets me evidence a wide range of software thinking concepts in around 50 lines of code.
        </p>

        <div className="bg-white border border-black/10 rounded-lg p-6 mb-8">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            <ImageWithFallback
              src={bmiAppImg}
              alt="BMI Calculator application output screenshot"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4 min-w-0">
            <h3>Defensive Input Validation</h3>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`def get_valid_number(prompt):
    """Ask the user for a number. Keep asking until they
    give a valid positive number."""
    while True:
        try:
            value = float(input(prompt))
            if value <= 0:
                print("Value must be greater than 0. Try again.")
                continue
            return value
        except ValueError:
            print("That's not a valid number. Try again.")`}</code></pre>
            </div>
            <p className="text-sm">
              A function that repeatedly asks the user for a number and only accepts valid positive numeric input. Uses a try/except block to catch ValueError when the user types non-numeric text, and a separate check to reject zero or negative numbers. The function returns control to the main program only when valid input is received. This evidences defensive programming — anticipating where users will get it wrong rather than only handling the ideal case.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4 min-w-0">
            <h3>Conditional Category Logic</h3>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`def get_category(bmi):
    """Take a BMI value, return the matching category as a string."""
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"`}</code></pre>
            </div>
            <p className="text-sm">
              A function that takes a calculated BMI value and returns the matching health category as a string. Uses if/elif/else with carefully ordered conditions so each branch correctly captures its range without needing redundant boundary checks. This evidences understanding of conditional logic and how condition ordering affects program behaviour.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4 min-w-0">
            <h3>Main Program Loop</h3>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`# Loop so the user can do multiple calculations
while True:
    print()
    height_cm = get_valid_number("Enter your height in cm: ")
    weight_kg = get_valid_number("Enter your weight in kg: ")

    bmi = calculate_bmi(weight_kg, height_cm)
    category = get_category(bmi)

    print()
    print("Your BMI is:", round(bmi, 1))
    print("Category:", category)

    again = input("\\nCalculate another? (y/n): ").lower()
    if again != "y":
        print("Goodbye!")
        break`}</code></pre>
            </div>
            <p className="text-sm">
              The main program flow — prints a header, then enters a loop that repeatedly gathers input, calls the calculator and category functions, displays the results, and asks the user whether they want another calculation. Uses while True with a break condition based on user input. This evidences program structure and reusability without rerunning the script.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-[#FF6B5B]"></div>
          <h2>Software Engineering Concepts Demonstrated</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="mb-3">Function Decomposition</h3>
            <p className="text-sm">
              The program is split into three named functions, each with one clear responsibility. The main program calls these functions rather than holding all logic in one block, evidencing decomposition as a problem-solving approach.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="mb-3">Defensive Programming</h3>
            <p className="text-sm">
              Three categories of bad input are caught and handled with friendly messages: non-numeric text, zero, and negative numbers. The program never crashes or accepts garbage data.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="mb-3">Documentation Through Docstrings</h3>
            <p className="text-sm">
              Each function has a triple-quoted string explaining what it does, evidencing professional code documentation habits beyond just inline comments.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="mb-3">Iteration Over Repetition</h3>
            <p className="text-sm">
              The program uses a main loop and an inner validation loop to handle repeated tasks, rather than copy-pasting the same code multiple times.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
