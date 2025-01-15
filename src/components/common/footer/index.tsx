// Next
import Image from "next/image";
// My-Components
import SocialMedia from "../socialMedia";
import BottomFooter from "./BottomFooter";
import SectionTitle from "../sectionTitle";
import ConnectionInfo from "./ConnectionInfo";

const Footer = () => {
  return (
    <footer className="section-padding">
      <div className="container flex flex-col gap-4 py-4 md:flex-row">
        <section className="w-full border-b pb-4 md:w-1/3 md:border-b-0">
          <SectionTitle title="Eazy" mainWord="Cart" />
          <SocialMedia />
          <ConnectionInfo />
        </section>
        <div className="grid w-full grid-cols-1 md:w-2/3 xs:grid-cols-3">
          <section>
            <h2 className="mb-4 text-xl font-bold text-secondary">Company</h2>
            <ul className="flex flex-wrap items-center gap-1 divide-x px-1 ps-2 text-muted-foreground xs:flex-col xs:items-start xs:divide-x-0">
              <li className="border-secondary ps-2">About Us</li>
              <li className="border-secondary ps-2">Services</li>
              <li className="border-secondary ps-2">Case Studies</li>
              <li className="border-secondary ps-2">Blog</li>
              <li className="border-secondary ps-2">Contact</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-bold text-secondary">Account</h2>
            <ul className="flex flex-wrap items-center gap-1 divide-x px-1 ps-2 text-muted-foreground xs:flex-col xs:items-start xs:divide-x-0">
              <li className="border-secondary ps-2">Sign In</li>
              <li className="border-secondary ps-2">View Cart</li>
              <li className="border-secondary ps-2">My Wishlist</li>
              <li className="border-secondary ps-2">Track My Order</li>
              <li className="border-secondary ps-2">Compare Products</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-bold text-secondary">Download</h2>
            <Image
              width={646}
              height={250}
              src="/assets/images/google-play.png"
              alt="Google play link."
            />
          </section>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
};

export default Footer;
