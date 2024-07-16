# React Component ( DatePicker )

## Features

- Displays a 5-week calendar grid (7 columns x 5 rows).
- Highlights today's date.
- Allows selection of a start date and an end date.
- Forbidden non-current month selection.

## Prerequisites

- Node.js (version 12 or higher)
- npm (version 6 or higher)

## Getting Started

### Installation

1. **Clone the repository:**

```PowerShell
git clone https://github.com/KirkCMH/Answers.git
cd react-calender
```

2. **Install dependencies:**
   Using npm:

```PowerShell
npm install
```

## Running the Project

**Start the development server:**

Using npm:

```PowerShell
npm start
```

## Project Structure

`src/Datepicker.js`: The main datepicker component.
`src/Datepicker.css`: The CSS file for styling the datepicker.
`src/App.js`: The entry point of the React application where the datepicker component is used.

## Usage

- Select a start date: Click on a date to set it as the start date.
- Select an end date: Click on a date that is the same as or later than the start date to set it as the end date.
- Reset the start date: Click on a date earlier than the current start date to reset the start date.
