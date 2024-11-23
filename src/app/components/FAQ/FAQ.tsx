import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is this tool, and how does it work?",
      answer:
        "Our AI tool generates 3D characters based on your written prompts. Simply describe your character's appearance, style, or features, and the AI will create a fully customizable 3D model in seconds.",
    },
    {
      question: "What file formats are supported for downloads?",
      answer:
        "We support commonly used file formats like FBX, OBJ, and STL to ensure compatibility with most 3D software and workflows.",
    },
    {
      question: "Can I use the characters commercially?",
      answer:
        "Yes! Characters generated with a paid plan include a commercial license. However, models generated under the free or Basic plan are for personal use only unless specified.",
    },
    {
      question: "Is any prior 3D modeling experience required?",
      answer:
        "Not at all! The tool is designed for both beginners and professionals. Whether you’re new to 3D or an experienced designer, our AI simplifies the process for everyone.",
    },
    {
      question:
        "What’s the difference between the Basic, Advanced, and Professional plans?",
      answer:
        "The plans differ in the number of characters you can generate, customization features, and support levels. Check out our pricing section for a detailed comparison.",
    },
    {
      question: "Can I edit the generated characters after download?",
      answer:
        "Yes! The exported models are fully editable in popular 3D software like Blender, Maya, or Unity.",
    },
    {
      question:
        "Does the tool integrate with other 3D or game development software?",
      answer:
        "Yes, our Professional plan includes integrations with software like Blender, Maya, and Unreal Engine. API access for custom workflows is also available.",
    },
    {
      question: "What happens if I hit my generation limit?",
      answer:
        "If you reach your generation limit, you can either wait until your limit resets at the start of the next billing cycle or upgrade to a higher plan for additional creations.",
    },
  ];

  return (
    <div className="container flex flex-col gap-8 items-center w-full">
      <h2>FAQ</h2>

      <Accordion type="single" collapsible className="xl:w-1/2 w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={`faq_${index}`} value={`item_${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
