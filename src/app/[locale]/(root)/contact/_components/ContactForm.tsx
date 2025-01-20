// Third-Party =====> shadcn-ui
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// My-Components
import SectionTitle from "@/components/common/sectionTitle";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title="Drop Us"
          mainWord="A Line"
          className="text-center"
          hasSubTitle={true}
        />
        <form
          action=""
          className="mx-auto mt-10 w-5/6 rounded-lg bg-background p-4 shadow-xl"
        >
          <div className="mb-4">
            <Label htmlFor="phone">Name</Label>
            <Input id="name" placeholder="Name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="Phone" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
          <Button className="mt-12">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
