import { useState } from "react";

function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    const audio = new Audio("audio/fanfare.wav");
    audio.play();
  };

  return (
    <>
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor="custom"
        >
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheck}
            className="peer relative appearance-none w-40 h-40 border rounded-md
            bg-orange-50 border-orange-800 cursor-pointer
            checked:bg-orange-700 checked:border-orange-800 checked:before:bg-orange-900"
            id="custom"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-32 h-32"
              fill="currentColor"
            >
              <path d="M11.219 3.375 8 7.399 4.781 3.375A1.002 1.002 0 0 0 3 4v15c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4a1.002 1.002 0 0 0-1.781-.625L16 7.399l-3.219-4.024c-.381-.474-1.181-.474-1.562 0zM5 19v-2h14.001v2H5zm10.219-9.375c.381.475 1.182.475 1.563 0L19 6.851 19.001 15H5V6.851l2.219 2.774c.381.475 1.182.475 1.563 0L12 5.601l3.219 4.024z"></path>
            </svg>
          </span>
        </label>
      </div>
    </>
  );
}
export default Checkbox;
