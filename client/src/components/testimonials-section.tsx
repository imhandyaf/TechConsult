import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Miller",
    role: "Local Mom",
    initials: "SM",
    gradient: "from-primary to-secondary",
    content:
      "They helped set up our whole smart home system and were so patient explaining everything to us. Now our family feels like tech experts!",
  },
  {
    name: "James Chen",
    role: "Retired Teacher",
    initials: "JC",
    gradient: "from-secondary to-accent",
    content:
      "When my computer crashed, they came the same day and saved all my photos. Such caring, reliable service from people who really understand our community.",
  },
  {
    name: "Emily Roberts",
    role: "Busy Parent",
    initials: "ER",
    gradient: "from-accent to-emerald-500",
    content:
      "They visit every few months to keep our family's devices running smoothly. It's like having a tech-savvy relative who actually knows what they're doing!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-semibold mr-3`}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
