import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  details: string[];
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { icon: Icon, color, title, description, details } = service;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className="glass-effect cursor-pointer group h-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-6">
          <motion.div
            className={cn("text-4xl mb-4", color)}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="w-10 h-10" />
          </motion.div>

          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            {description}
          </p>

          <div className={cn("flex items-center font-medium", color)}>
            <span>Explore Services</span>
            <motion.div
              className="ml-2"
              animate={{ x: isExpanded ? 2 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600"
              >
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
