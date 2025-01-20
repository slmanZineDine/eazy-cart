// Next
import Image from "next/image";
// React
import { ReactNode } from "react";

const TextImage = ({
  imageSrc,
  children,
}: {
  imageSrc: string;
  children: ReactNode;
}) => {
  return (
    <section className="section-padding">
      <div className="flex-between container flex-col gap-8 lg:flex-row lg:items-start">
        <div>
          {children}
          <div className="text-muted-foreground">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque, id necessitatibus ipsam suscipit quibusdam sint sit
              ratione adipisci et delectus eaque officia, animi temporibus iure
              magni, totam nostrum minus sunt?
            </p>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              fuga maiores in eos totam non, molestiae alias asperiores magni
              adipisci explicabo cupiditate est mollitia deserunt provident!
              Rerum reprehenderit in alias ducimus eum eaque laudantium quaerat
              commodi similique voluptatum ad temporibus, recusandae reiciendis
              corporis mollitia. Molestias hic sapiente quaerat distinctio
              atque!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              fuga maiores in eos totam non, molestiae alias asperiores magni
              adipisci explicabo cupiditate est mollitia deserunt provident!
              Rerum reprehenderit in alias ducimus eum eaque laudantium quaerat
              commodi similique voluptatum ad temporibus, recusandae reiciendis
              corporis mollitia. Molestias hic sapiente quaerat distinctio
              atque!
            </p>
          </div>
        </div>
        <Image width={400} height={600} src={imageSrc} alt="Image." />
      </div>
    </section>
  );
};

export default TextImage;
