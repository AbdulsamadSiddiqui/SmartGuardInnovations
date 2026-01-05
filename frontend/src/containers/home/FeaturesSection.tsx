
import cardImg from '@/assets/images/card-img.png';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
    return (
        <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="sm:text-4xl text-3xl font-bold text-[#053131] leading-tight mb-4">
                        <span className="font-bold">Trusted</span> <span className="font-light font-soka">Marketing</span> <span className="font-bold">Consulting</span><br />
                        <span className="font-light font-soka">agency for business.</span>
                    </h2>
                    <p className="text-gray-400">
                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
                            className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="p-4">
                                <div className="aspect-video bg-gray-200 rounded-[25px] overflow-hidden">
                                    <img src={cardImg} alt="feature" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-[#053131] leading-snug group-hover:text-[#0C6E6D] transition-colors">
                                        Lorem Ipsum is Simply Dummy Text simply dummy text
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Experience healthcare you can trust. Our dedicated team provides compassionate, high-quality care.
                                    </p>
                                </div>
                                <button className="text-[#053131] font-black uppercase text-sm flex items-center gap-2 hover:text-[#0C6E6D] transition-colors">
                                    Read More
                                    <span className="text-lg group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
