import './App.css';
import { motion } from "framer-motion"
import {useState} from "react";
import {findAllByDisplayValue} from "@testing-library/react";

function App() {
    const [isOpen, setIsOpen] = useState(false);



    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 3,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }
    return (
        <>
            <div style={{ borderRadius: '5px', textAlign: 'center', background: "white"}}
                 onClick={() => setIsOpen(!isOpen)}>Show</div>
            <motion.ul
                className={`container ${isOpen ? "open" : ""}`}
                variants={container}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
            >
                {[0, 1, 2, 3].map((index) => (
                    <motion.li key={index} className="item" variants={item} />
                ))}
            </motion.ul>
        </>
    );
}

export default App;
