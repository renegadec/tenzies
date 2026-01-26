# Tenzies

A fun and interactive dice game built with React and Vite. The goal is to roll 10 dice until they all show the same value. Hold dice between rolls to freeze their values and work towards matching all dice.

## 🔗 Live Demo

Check out the live version of the game here: [`https://tenzies0x.netlify.app/`](https://tenzies0x.netlify.app/).

## 🎮 How to Play

1. **Roll the dice** - Click the "Roll" button to generate new values for all unheld dice
2. **Hold dice** - Click on any die to hold it (it will turn green). Held dice keep their value between rolls
3. **Win condition** - Get all 10 dice to show the same value to win!
4. **New game** - After winning, click "New Game" to start fresh

## ✨ Features

- **Timer** - Tracks your completion time (starts when you first hold a die)
- **Best Time** - Automatically saves and displays your fastest win time
- **Roll Counter** - Keeps track of how many rolls it takes to win
- **Visual Feedback** - Held dice are highlighted in green
- **Celebration** - Confetti animation when you win!
- **Accessibility** - Screen reader announcements and ARIA labels

## 🛠️ Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **react-confetti** - Celebration animation
- **react-timer-hook** - Stopwatch functionality
- **nanoid** - Unique ID generation for dice

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/renegadec/tenzies.git
cd tenzies
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
tenzies/
├── public/
│   └── assets/
│       ├── dice1.svg - dice6.svg  # Dice face images
├── src/
│   ├── components/
│   │   ├── Die.jsx           # Individual die component
│   │   ├── Timer.jsx         # Timer display component
│   │   ├── BestTime.jsx      # Best time tracker component
│   │   └── RollsCount.jsx    # Roll counter component
│   ├── App.jsx               # Main game logic and state
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
├── package.json
└── README.md
```

## 🎯 Game Logic

- The game starts with 10 randomly generated dice (values 1-6)
- Players can hold/unhold dice by clicking on them
- Rolling generates new random values for unheld dice only
- The timer starts automatically when the first die is held
- Winning occurs when all dice are held AND have the same value
- Best time is tracked in local state (resets on page refresh)

## 🎨 Customization

The game uses CSS for styling. You can customize:
- Colors in `src/index.css`
- Dice images in `public/assets/`
- Game rules by modifying the logic in `src/App.jsx`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

See LICENSE file for details.
