import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./ai.png"
              alt="logo"
              className="w-12 h-12 object-containt"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                CUSTOMIZE
                <br className="lg:block hidden" /> WITH EASE
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create unique and exclusive shirt designs with our brand new 3D
                Customization tool.{" "}
                <span className="font-bold text-pink-600">
                  Unleash your imagintaion
                </span>{" "}
                and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => (state.intro = false)}
                customeStyles="w-fit px-8 py-3.5 font-bold text-md"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
