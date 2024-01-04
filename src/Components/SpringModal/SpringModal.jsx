import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SpringModal = ({ isOpen, setIsOpen, Element }) => {
    

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="lg:w-[70%] bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full shadow-xl cursor-default  overflow-hidden"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <div className="relative z-10">
                            {Element}

                            <button
                                onClick={() => setIsOpen(false)}
                                className=" absolute -top-5 -right-5 w-10 bg-black p-2 rounded-full px-0"
                            >
                                X
                            </button>


                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpringModal;