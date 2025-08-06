import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long is the current waitlist?",
    answer:
      "Our current waitlist is about 3-4 weeks depending on what type of help you need. We prioritize urgent issues and try to fit in emergency calls when possible.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve families throughout our local community and surrounding neighborhoods. Give us a call to see if we can help your family - we might be closer than you think!",
  },
  {
    question: "Do you help with emergencies?",
    answer:
      "Absolutely! If your family's computer crashes or your internet goes down when you need it most, we'll do our best to help quickly. We understand how important technology is to daily life.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "We believe in fair, honest pricing with no surprises. We'll always give you an upfront estimate and explain exactly what we're doing. Many services are much more affordable than you might expect!",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Get answers to common questions about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect overflow-hidden">
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-700 h-auto"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </Button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-slate-600 dark:text-slate-300">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
