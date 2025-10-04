"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NotLongerMaintained() {
      const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="border-red-600/20">
                <DialogTitle>No Longer Maintained</DialogTitle>
                <DialogDescription>
                    This site will no longer be maintained by the owner. You may run into
                    bugs & UI issues.
                </DialogDescription>

                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-67">
                        <AccordionTrigger>Why?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                This website is full of bugs & needs improvement. It would be a
                                nightmare to clean all of this up. I will eventually rewrite the
                                site from scratch.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-42">
                        <AccordionTrigger>What issues will I occur?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>UI Elements being buggy, errors and more.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-69">
                        <AccordionTrigger>Will you ever bring this back?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                Eventually I will rewrite the entire site from scratch. But
                                before that the bot will need siginificant changes, maybe even
                                an entire rewrite. Using a python API with a website is the bane
                                of my existance.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-cuz">
                        <AccordionTrigger>
                            When is the dashboard coming out?
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                There's an open PR, but I'm unlikely to complete it because of
                                the state of this website.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </DialogContent>
        </Dialog>
    );
}
