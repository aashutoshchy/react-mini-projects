import { useEffect, useState } from "react"

function App() {

  const [length, setLength] = useState(8);

  // to store the generated password
  const [password, setPassword] = useState();

  const [numAllowed, setNumAllowed] = useState(true);
  const [lwrCase, setLwrCase] = useState(true);
  const [uprCase, setUpperCase] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);

  const generatePassword = () => {
    // to store to numbers and characters
    let str = "";
    let pass = "";

    if (numAllowed) str += "0123456789";
    if (lwrCase) str += 'abcdefghijklmnopqrstuvwxyz';
    if (uprCase) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (charAllowed) str += '!@#$%^&*()';

    console.log(length)

    for (let i = 0; i < length; i++) {
      // Generating Random Number
      const randNum = Math.floor(Math.random() * str.length);
      pass += str.charAt(randNum);
      setPassword(pass)
    }


  }

  useEffect(() => {
    generatePassword();
  }, [numAllowed, lwrCase, uprCase, charAllowed, length, setPassword])

  return (
    <>
      <div className="bg-[#F2EAE0] h-screen w-full flex items-center justify-center">
        <div className="h-auto flex flex-col px-10 flex-wrap bg-white rounded-2xl items-center">
          <h1 className="font-bold w-full text-2xl border-b-2 border-[#F2EAE0] py-5 mb-7 text-[#9B8EC7]">Password Generator</h1>
          <div className="border-2 border-[#F2EAE0] flex justify-between items-center mb-7 gap-2">
            <input type="text" className="sh-10 w-lg my-2 px-4 outline-none" value={password} readOnly />
            <i className="fa-regular text-3xl fa-copy text-[#9B8EC7]"></i>
          </div>
          <div className="flex justify-between mb-2 w-full">
            <label htmlFor="lengthInput" className="font-medium text-[#9B8EC7]">Password Length: </label>
            <p className="font-semibold">{length}</p>
          </div>
          <input onChange={(e) => setLength(e.target.value)} type="range" min={8} max={15} id="lengthInput" className="m-auto mb-7 accent-[#B4D3D9] w-full" />
          <div className="flex justify-between mb-2 w-full">
            <label className="font-medium text-[#9B8EC7]">Password Settings: </label>
          </div>
          <div className="w-full grid grid-cols-2 gap-2.5 mb-7">
            <div>
              <input type="checkbox" id="lwrCaseToggle" className="mr-2" />
              <label htmlFor="lwrCaseToggle">Lowercase (a-z)</label>
            </div>
            <div>
              <input type="checkbox" id="lwrCaseToggle" className="mr-2" />
              <label htmlFor="lwrCaseToggle">Uppercase (A-Z)</label>
            </div>
            <div>
              <input type="checkbox" id="lwrCaseToggle" className="mr-2" />
              <label htmlFor="lwrCaseToggle">Numbers (0-9)</label>
            </div>
            <div>
              <input type="checkbox" id="lwrCaseToggle" className="mr-2" />
              <label htmlFor="lwrCaseToggle">Symbols (!, @, #, $, % ...)</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
