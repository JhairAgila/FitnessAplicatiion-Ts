import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from 'framer-motion';
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';


const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: 'Fill wit content :v'
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: 'Fill wit content :v'
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and pro trainers",
        description: 'Fill wit content :v'
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20">
            Benefits
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/** HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <Htext> MORE THAN JUST GYM.</Htext>
                    <p className="my-5 text-sm ">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/** BENEFITS */}
                <motion.div className=" mt-5 items-center justify-between md:flex gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/** GRAPICHS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/** GRAPIC */}
                    <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />
                    {/** DESCRIPTION */}
                    <div>
                        {/** TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:-[1] before:content-abstractwaves">
                                <motion.div
                                    initial='hidden'
                                    whileInView='visible'
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.7 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <Htext>
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">
                                            FIT
                                        </span>
                                    </Htext>
                                </motion.div>
                            </div>
                        </div>
                        {/** DESCRIPTION */}
                        <div>
                            <p className="my-5">Its a small destiption </p>
                            <p className="mb-5">It's a tiny description</p>

                        </div>
                        {/** BUTTON */}
                        <motion.div className="relative mt-16"
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits