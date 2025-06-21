import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import AnimatedDrawer from "./AnimatedDrawer";

function QuestionDrawer({ data }) {
     const [isOpen, setIsOpen] = useState(false);

     return (
          <div className="border-1 rounded-sm px-4 py-2 space-y-4">
               <div className="flex items-center justify-between">
                    <p>{data.question}</p>
                    <div className="size-6 flex items-center justify-center">
                         <button onClick={() => setIsOpen((state) => !state)}>
                              {isOpen ? <LuMinus /> : <GoPlus />}
                         </button>
                    </div>
               </div>

               <AnimatedDrawer isOpen={isOpen}>{data.answer}</AnimatedDrawer>
          </div>
     );
}

export default QuestionDrawer;
