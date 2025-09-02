import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the requirements to join the referral program?",
    answer: "You must be a licensed real estate agent in good standing with at least 2 years of experience in residential sales. We prefer agents with luxury market experience and a proven track record of client service excellence."
  },
  {
    question: "How are commission rates determined?",
    answer: "Commission rates range from 3% to 5% based on project type and value. Custom homes over $3M earn 5%, major renovations over $1M earn 4.5%, and additions over $800K earn 4%. Exclusive territory partners receive higher rates."
  },
  {
    question: "When do I receive my commission payment?",
    answer: "Commissions are paid within 30 days of contract signing and initial deposit. For larger projects, we can arrange milestone payments throughout the construction process. All payments are via direct deposit or check."
  },
  {
    question: "What support do you provide for my referred clients?",
    answer: "Every referred client receives VIP treatment including 24-hour response guarantee, dedicated project manager, regular progress updates, and priority scheduling. We handle all project communication while keeping you informed."
  },
  {
    question: "Are there any fees to join the program?",
    answer: "No, there are absolutely no fees to join our referral program. We provide all marketing materials, tracking systems, and support at no cost. You only earn money when your referrals convert to paying clients."
  },
  {
    question: "What types of projects qualify for referrals?",
    answer: "We accept referrals for custom luxury homes ($500K+), major whole-home renovations ($200K+), luxury kitchen/bathroom remodels ($75K+), and home additions ($150K+). All projects must meet our quality and budget standards."
  },
  {
    question: "Can I track my referrals and commissions?",
    answer: "Yes, you'll have access to our partner portal where you can track all referrals, project status, estimated commission amounts, and payment history. You'll also receive regular email updates on project progress."
  },
  {
    question: "What happens if my referral doesn't move forward?",
    answer: "If a referral doesn't convert after our initial consultation, there's no penalty to you. We only charge clients for work we actually perform. We'll provide feedback on why projects don't move forward to help improve future referrals."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="heading-xl mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our referral program, 
            commission structure, and partnership benefits.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-luxury border-0"
              >
                <AccordionTrigger className="text-left hover:no-underline px-8 py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;