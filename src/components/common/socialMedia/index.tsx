// Next
import Image from "next/image";

const SocialMedia = () => {
  // ################### Data ###################
  const socialMedia = [
    { id: 1, title: "facebook" },
    { id: 2, title: "youtube" },
    { id: 3, title: "whatsapp" },
    { id: 4, title: "instagram" },
  ];

  return (
    <ul className="flex-center gap-3">
      {socialMedia.map(({ id, title }) => (
        <li key={id}>
          <Image
            width={24}
            height={24}
            src={`/assets/svg/social-media/${title}.svg`}
            alt={`${title} Link.`}
          />
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
