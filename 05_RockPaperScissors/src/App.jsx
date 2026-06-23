import { useState } from "react"

function App() {

  const [userChoice, setUserChoice] = useState('');
  const [compChoice, setCompChoice] = useState('');

  const playGame = (playerChoose) => {
    setUserChoice(playerChoose)
    setCompChoice(getCompChoice());
    // getCompChoice()

    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + compChoice);

    if (userWin()) {
      console.log("You win")
    } else {
      console.log("You loose")
    }
  }

  const getCompChoice = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    let randNum = Math.floor(Math.random() * 3);
    console.log(choices[randNum])
    return choices[randNum];
  }

  const userWin = () => {
    switch (userChoice) {
      case 'Rock':
        return compChoice == "Scissors" ? true : false;
        break;
      case 'Paper':
        return compChoice == "Rock" ? true : false;
        break;

      case 'Scissors':
        return compChoice == "Paper" ? true : false;
        break;
    }
  }

  return (
    <>
      <div className="bg-[#FFE2E2] h-screen w-full flex flex-col items-center">
        <h1 className="text-center pt-16 font-bold text-3xl text-[#8785A2]">Rock Paper Scissors</h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-1/2 w-1/2">
          <button onClick={() => playGame("Rock")} className="bg-[#FFC7C7] rounded-[50%] h-30 w-30 text-5xl">👊</button>
          <button onClick={() => playGame("Paper")} className="bg-[#FFC7C7] rounded-[50%] h-30 w-30 text-5xl">👊</button>
          <button onClick={() => playGame("Scissors")} className="bg-[#FFC7C7] rounded-[50%] h-30 w-30 text-5xl">👊</button>
        </div>
        <div className="flex w-1/2 justify-between my-5">
          <p>Player Choice: {userChoice}</p>
          <p>Computer Choice: {compChoice}</p>
        </div>
        <div className="w-1/2 py-10 flex items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-[#8785A2]">Your Score</p>
            <p className="text-6xl font-bold text-[#463fa0]">0</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-[#8785A2]">Computer Score</p>
            <p className="text-6xl font-bold text-[#463fa0]">0</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
