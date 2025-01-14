// Icons
import { Clock, Mail, MapPinHouse, Phone } from "lucide-react";

const ConnectionInfo = () => {
  return (
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-3">
        <Phone size={20} className="shrink-0 text-primary" /> +7(684)555-0102
      </li>
      <li className="flex items-center gap-3">
        <MapPinHouse size={20} className="shrink-0 text-primary" />{" "}
        <address>6391 Elgin St. Santa Ana, llinois 85486</address>
      </li>
      <li className="flex items-center gap-3">
        <Mail size={20} className="shrink-0 text-primary" /> example@gmail.com
      </li>
      <li className="flex items-center gap-3">
        <Clock size={20} className="shrink-0 text-primary" />{" "}
        <span>10:00 - 18:00, Mon - Sat</span>
      </li>
    </ul>
  );
};

export default ConnectionInfo;
