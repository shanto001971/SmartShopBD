import { motion } from "framer-motion";

const Option = ({ text, Icon, setOpen }) => {

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      };
      
      const actionIconVariants = {
        hover: { scale: 1.2 },
      };
      
    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
        >
            <motion.span variants={actionIconVariants}>
                <Icon />
            </motion.span>
            <span>{text}</span>
        </motion.li>
    );
};

export default Option;