import React, { useState, useEffect } from "react";

export default _ => {
   const [count, setCount] = useState(0);
   useEffect(
      _ => {
         const timer = setTimeout(_ => setCount(count + 1), 1000);
         return _ => clearTimeout(timer);
      },
      [count, setCount]
   );

   return (
      <div className="text-white bg-gray-800">
         <header>
            <p>
               Edit <code>src/App.jsx</code> and save to reload.
            </p>
            <p>
               Page has been opeNED FOr <code>{count}</code> seconds.
            </p>
            <p>
               <a
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </a>
            </p>
         </header>
      </div>
   );
};
