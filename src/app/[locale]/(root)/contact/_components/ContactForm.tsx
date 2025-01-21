// i18n
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Third-Party =====> shadcn-ui
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
// My-Components
import SectionTitle from "@/components/common/section-title";

const ContactForm = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { contact, common } = await getDictionary(locale);

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title={contact.messageTitle}
          mainWord={contact.messageTitleHighlight}
          className="text-center"
          hasSubTitle={true}
          subTitle={common.subTitle}
        />
        <form
          action=""
          className="mx-auto mt-10 w-5/6 rounded-lg bg-background p-4 shadow-xl"
        >
          <div className="mb-4">
            <Label htmlFor="phone">{contact.name}</Label>
            <Input id="name" placeholder={contact.name} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">{contact.phone}</Label>
              <Input id="phone" placeholder={contact.phone} />
            </div>
            <div>
              <Label htmlFor="email">{contact.email}</Label>
              <Input type="email" id="email" placeholder={contact.email} />
            </div>
          </div>
          <div className="mt-4">
            <Label htmlFor="message">{contact.yourMessage}</Label>
            <Textarea placeholder={contact.messagePlaceholder} id="message" />
          </div>
          <Button className="mt-12">{contact.sendMessage}</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
