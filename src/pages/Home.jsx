import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'
import { CustomButton } from '../components'
import {
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation
} from '../config/motion'

import state from '../store'
const Home = () => {
const snap = useSnapshot(state)
  return (
  <AnimatePresence>
     {
         snap.intro && <motion.section className="home" {...slideAnimation('left')}>
 <motion.header {...slideAnimation('down')}>
     <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
 </motion.header>
 <motion.div className="home-content" {...headContainerAnimation}>
 <motion.div {...headTextAnimation}>
     <h1 className="head-text">Nonso<br className="xl:block hidden"/> Motion </h1> 
 </motion.div>
 <motion.div  {...headContentAnimation} className="flex flex-col gap-5">
     <p className="max-w-md font-normal text-gray-600 text-base">Now you can customize your desired dress in whatever form and style you want. <strong> Start Now</strong> and you won't regret it</p>
 <CustomButton type="filled" title="Choose your style" handleClick={() => state.intro = false} 
 cusomStyles = "w-fit px-4 py-2.5 font-bold text-sm"
 />  
 </motion.div>
 </motion.div>
 
         </motion.section>
     } 
  </AnimatePresence>

  )
}

export default Home     