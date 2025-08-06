import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Wrench } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Award,
      color: "bg-primary/20 text-primary",
      title: "Trusted Local Experts",
      description: "Friendly, patient technicians who live and work in your community",
    },
    {
      icon: Clock,
      color: "bg-secondary/20 text-secondary",
      title: "Flexible Scheduling",
      description: "Available evenings and weekends to fit your family's schedule",
    },
    {
      icon: Shield,
      color: "bg-accent/20 text-accent",
      title: "Fair, Transparent Pricing",
      description: "Honest pricing with no hidden fees or surprise charges",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Community Tech Support?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              We're your friendly neighborhood tech support team, dedicated to helping 
              families and individuals in our community with all their technology needs. 
              Our patient, knowledgeable team treats every home like our own.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${feature.color}`}
                  >
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl shadow-2xl w-full h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center border border-slate-200 dark:border-slate-700">
              <div className="text-center p-8">
                <Wrench className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-slate-600 dark:text-slate-300 text-lg font-medium">Your Digital Handyman</p>
                <p className="text-slate-500 dark:text-slate-400">Ready to help with all your tech needs</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6"
            >
              <Card className="glass-effect">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">5+ Years</div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Experience
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
