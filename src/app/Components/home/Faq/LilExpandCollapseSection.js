import { motion, AnimatePresence } from 'framer-motion';
import styles from "../../../styles/Faq.module.css";

const LilExpandCollapseSection = ({ toggleText, contentText, isExpanded, onToggle }) => {
  return (
    <div  className={styles.expandcont}>
      <div id='cursor-down' className={styles.buttonexpandll} onClick={onToggle}>
     <div className={styles.faqrowp}>
     <h5 style={{margin:"0"}}>{toggleText}</h5><img src="/arrow.svg" alt="arrow" className={isExpanded ? styles.rotated : styles.normal}/>
     </div>
      </div>
      <AnimatePresence >
        {isExpanded && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: .2, ease: 'backInOut', stiffness: 300, damping: 900, mass: 300 }}
            style={{ overflow: 'hidden' }}
            className={styles.HidenText}
          >
            <div className={styles.extxt}><p>{contentText}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LilExpandCollapseSection;
