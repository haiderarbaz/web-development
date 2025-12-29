# readline-sync Practice Questions 🚀

A comprehensive collection of practice questions to master `readline-sync` for building command-line applications in Node.js.

## 📚 Prerequisites

Install readline-sync:

```bash
npm install readline-sync
```

Basic usage:

```javascript
const readlineSync = require("readline-sync");

// Basic input
let name = readlineSync.question("Name: ");

// Integer input
let age = readlineSync.questionInt("Age: ");

// Yes/No question
if (readlineSync.keyInYN("Continue?")) {
}

// Menu selection
let options = ["Option 1", "Option 2", "Exit"];
let choice = readlineSync.keyInSelect(options, "Choose:");

// Hidden input (passwords)
let pwd = readlineSync.question("Password: ", { hideEchoBack: true });
```

---

## 📝 Basic Level (Getting Started)

### 1. Hello User

**Requirements:**

- Ask for the user's name
- Greet them with "Hello, [name]!"

---

### 2. Simple Calculator

**Requirements:**

- Ask for two numbers
- Ask which operation (+, -, \*, /)
- Display the result

---

### 3. Age Calculator

**Requirements:**

- Ask for birth year
- Calculate and display current age

---

### 4. Temperature Converter

**Requirements:**

- Ask user to choose: Celsius to Fahrenheit OR Fahrenheit to Celsius
- Take temperature input
- Convert and display result

**Formulas:**

- C to F: `(C × 9/5) + 32`
- F to C: `(F - 32) × 5/9`

---

### 5. Even or Odd

**Requirements:**

- Ask for a number
- Tell if it's even or odd

---

## 🎯 Intermediate Level

### 6. Number Guessing Game

**Requirements:**

- Program picks a random number (1-100)
- User keeps guessing
- Give hints: "Too high" or "Too low"
- Count number of attempts
- Display attempts when correct

**Hint:** Use `Math.floor(Math.random() * 100) + 1` for random number

---

### 7. Grade Calculator

**Requirements:**

- Ask for 5 subject marks
- Calculate average
- Display grade (A, B, C, D, F)
- Show pass/fail status

**Grading Scale:**

- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: Below 60

---

### 8. Simple Todo List

**Requirements:**

- Menu: 1) Add task, 2) View tasks, 3) Exit
- Store tasks in an array
- Keep running until user chooses exit

---

### 9. Login System

**Requirements:**

- Set a username and password (hardcoded first)
- Give user 3 attempts to login
- Lock after 3 failed attempts

**Example:**

```javascript
const USERNAME = "admin";
const PASSWORD = "password123";
```

---

### 10. Word Counter

**Requirements:**

- Ask user to enter a sentence
- Count: words, vowels, consonants
- Display all counts

---

## 🚀 Medium Level

### 11. Bank Account Simulator

**Requirements:**

- Starting balance: $1000
- Menu: Check balance, Deposit, Withdraw, Exit
- Validate: no negative deposits, sufficient balance for withdrawal
- Keep transaction history

**Sample Output:**

```
--- Bank Menu ---
1. Check Balance
2. Deposit
3. Withdraw
4. Transaction History
5. Exit
```

---

### 12. Quiz Application

**Requirements:**

- Create 5 multiple-choice questions
- Use `keyInSelect()` for choices
- Track score
- Show final score and percentage

---

### 13. Student Management System

**Requirements:**

- Menu: Add student, View all students, Search student, Exit
- Store: name, age, grade
- Search by name
- Display all in formatted table

---

### 14. Simple Shopping Cart

**Requirements:**

- Show product list with prices
- User can add items to cart
- Show cart total
- Option to remove items
- Checkout with final bill

**Sample Products:**

```javascript
const products = [
  { id: 1, name: "Apple", price: 1.5 },
  { id: 2, name: "Bread", price: 2.0 },
  { id: 3, name: "Milk", price: 3.5 },
];
```

---

### 15. Password Strength Checker

**Requirements:**

- Ask for password
- Check: length (min 8), has uppercase, has lowercase, has number, has special char
- Give strength rating: Weak, Medium, Strong
- Suggest improvements

**Strength Criteria:**

- Weak: 0-2 criteria met
- Medium: 3 criteria met
- Strong: 4-5 criteria met

---

### 16. Number Series Generator

**Requirements:**

- Menu to choose series type:
  - Fibonacci (n terms)
  - Prime numbers (up to n)
  - Even/Odd numbers (range)
- Display the series

---

### 17. Simple Expense Tracker

**Requirements:**

- Add expense (amount, category, date)
- View all expenses
- View total by category
- View expenses for specific month

**Categories:** Food, Transport, Entertainment, Bills, Other

---

### 18. Rock, Paper, Scissors Game

**Requirements:**

- Play against computer
- Best of 5 rounds
- Keep score for both
- Declare final winner

**Rules:**

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

---

### 19. Unit Converter

**Requirements:**

- Menu: Length, Weight, Time
- Each has multiple units
- Convert between any two units
- Loop until user exits

**Units:**

- Length: meter, kilometer, mile, foot
- Weight: kilogram, gram, pound
- Time: second, minute, hour

---

### 20. Contact Book

**Requirements:**

- Add contact (name, phone, email)
- View all contacts
- Search by name
- Delete contact
- Edit contact
- Save and load from array

---

### 21. User Registration Form

**Description:**  
Create a simple user registration system using `readline-sync` that collects and validates user information before submission.

**Requirements:**

1. **Username Input:**

   - Ask for a username
   - Username must be at least 3 characters long
   - Keep asking until valid

2. **Password Input:**

   - Ask for a password (hidden input using `hideEchoBack`)
   - Password must be at least 6 characters long
   - Keep asking until valid

3. **Email Input:**

   - Ask for an email address
   - Email must contain "@" symbol
   - Keep asking until valid

4. **Age Input:**

   - Ask for age (use `questionInt()`)
   - Age must be 18 or above
   - Keep asking until valid

5. **Confirmation:**
   - Display all entered information (except password - show as \*\*\*\*)
   - Ask "Is this information correct?" using `keyInYN()`
   - If YES: Display "Registration successful!"
   - If NO: Display "Registration cancelled"

**Sample Output:**

```
Enter username: ab
Username must be at least 3 characters!
Enter username: john123

Enter password: ****

Enter email: johngmail.com
Invalid email! Must contain @
Enter email: john@gmail.com

Enter age: 15
You must be 18 or older!
Enter age: 25

--- Registration Summary ---
Username: john123
Password: ****
Email: john@gmail.com
Age: 25

Is this information correct? [y/n]: y
Registration successful!
```

**Bonus Challenge:**

- Add a "Confirm Password" field that must match the original password
- Add phone number validation (10 digits)
- Allow user to re-enter specific fields instead of cancelling completely

---

## 📖 Learning Path

1. **Start with questions 1-5** - Master basic input/output
2. **Move to questions 6-10** - Practice loops, conditions, and validation
3. **Try questions 11-15** - Build menus, data storage, and complex logic
4. **Challenge yourself with 16-21** - Combine multiple features

## 💡 Tips

- Always validate user input
- Use meaningful variable names
- Add clear instructions for users
- Handle edge cases (empty input, invalid data)
- Test your code thoroughly
- Add comments to explain your logic

## 🎓 Additional Resources

- [readline-sync Documentation](https://www.npmjs.com/package/readline-sync)
- [Node.js Documentation](https://nodejs.org/en/docs/)
