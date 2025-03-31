***SudokuSolver***

A simple web app that allows users to fetch a Sudoku puzzle, solve it, and visualize the solution using a backend API and a front-end implementation with JavaScript.

___Features___
1. Fetch a Sudoku puzzle from a remote API.
2. Automatically solve the Sudoku puzzle using a backtracking algorithm.
3. Display the puzzle on the web page.
4. Interactive interface with two main buttons:
  - Get Puzzle: Fetches a new puzzle.
  - Solve Puzzle: Solves the displayed puzzle.


__Tech Stack__

HTML: For structuring the webpage.
CSS: For styling the app and making it visually appealing.
JavaScript: For the functionality of fetching data from the API, solving the puzzle, and updating the UI.
API: A remote API to fetch Sudoku puzzles.


__How to Run the Project Locally__

1. Clone the Repository
  > git clone https://github.com/yourusername/sudoku-solver.git

2. Navigate to the Project Folder
  > cd sudoku-solver

3. Open the index.html File Open index.html in any browser (e.g., Chrome, Firefox, Safari) to see the app in action.

4. Click the "Get Puzzle" Button This fetches a Sudoku puzzle from the API and displays it in the grid.

5. Click the "Solve Puzzle" Button This solves the displayed Sudoku puzzle using a backtracking algorithm and fills the board with the solution.


__API Used__
This app fetches Sudoku puzzles from the following API:
  Sudoku API


__Response Format:__
The API response includes:

newboard: Contains the Sudoku puzzle grid (grids) and its solution.
difficulty: The difficulty level of the puzzle (easy, medium, hard).
Sudoku Solver Algorithm
The Sudoku puzzle is solved using a backtracking algorithm:
The solver iterates through the grid.
For each empty cell (0), it tries placing a valid number (1-9).
If placing a number doesn't break Sudoku rules (unique numbers in rows, columns, and subgrids), it moves to the next cell.
If no valid numbers can be placed, it backtracks by removing the last placed number and tries the next one.


__Files in the Project__

index.html: The main HTML file for the layout.
style.css: Contains the styles for the puzzle grid and buttons.
script.js: The main JavaScript file that handles the logic for fetching the puzzle, solving it, and updating the UI.

__Contributing__
Fork the repository.

Create your feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

