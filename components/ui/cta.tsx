"use client";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { Block } from "../block";
import SharpBox from "../sharpBox";

export function CallToAction() {
  return (
    <Block>
      <SharpBox>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
              className="text-vj-primary dark:text-vj-primary-dark mb-2 text-lg font-medium md:text-xl"
            >
              Let&apos;s Build Something Exceptional
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="text-vj-secondary dark:text-vj-secondary-dark text-sm"
            >
              I&apos;m always open to working on meaningful products and
              collaborating with teams that value clean architecture and refined
              user experiences. If you&apos;re building something impactful,
              I&apos;d love to contribute.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
          >
            <Button>
              <Link href="/contact" className="flex items-center gap-2">
                Start a Conversation <ArrowRightIcon data-icon="inline-end" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </SharpBox>
    </Block>
  );
}
