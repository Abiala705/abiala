import { react, useState } from "react";

function Toggle() {
  const [darkToggle, setDarkToggle] = useState(false);
  return (
    <div
      class={`w-full flex items-center justify-center bg-gray-300 flex-col ${
        darkToggle && "dark"
      }`}
    >
      <label class="toggleDarkBtn">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span class="slideBtnTg round"></span>
      </label>
    </div>
  );
}
export default Toggle;
