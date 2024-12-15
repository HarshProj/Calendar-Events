
## Dynamic Event Calendar
![image](https://github.com/user-attachments/assets/6a088e87-259a-4215-9616-8277ea8c4d92)

This is a dynamic calendar application built with React.js and Tailwind CSS that allows users to view and manage events for each day. The app includes features for adding, editing, and deleting events on specific dates, as well as navigating through months with ease. The events are stored locally using `localStorage` to ensure persistence across page reloads.

## Features

- **View Calendar**: Displays a calendar with days of the week and their respective dates.
- **Add Events**: Users can add events with a name, start time, end time, and description to any specific day.
- **Edit Events**: Users can modify event details such as name, time, and description.
- **Delete Events**: Users can delete events and have the calendar update accordingly.
- **Month Navigation**: Users can navigate between months using 'Previous' and 'Next' buttons.
- **Event Persistence**: Events are stored in `localStorage`, ensuring data is saved across page reloads.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/get-npm) (v6 or higher)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/dynamic-event-calendar.git
    ```

2. Navigate to the project directory:
    ```bash
    cd dynamic-event-calendar
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the App Locally

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and go to `http://localhost:3000` to see the app in action.

### Building for Production

To build the project for production:

```bash
npm run build
