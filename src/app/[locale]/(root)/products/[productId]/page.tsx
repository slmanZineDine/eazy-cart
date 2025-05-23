// Next
import Image from "next/image";
import { Metadata } from "next";
// My-Components
import SocialMedia from "@/components/common/social-media";
import StarsRating from "@/components/common/rating/StarsRating";
import AddToCartBtn from "@/components/common/product/AddToCartBtn";
// API
import { getAllProducts, getProduct } from "@/services/products";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Data
import { CURRENCY } from "@/constants";

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products
    .map(({ id }) => ({
      productId: `${id}`,
    }))
    .slice(0, 20);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const productId = (await params).productId;
  const product = await getProduct({ id: productId });

  return {
    title: { absolute: product.title },
    description: product.description,

    openGraph: {
      images: [{ url: product.image, alt: product.title }],
    },
  };
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  // ################### NEXT ###################
  const productId = (await params).productId;

  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { common } = await getDictionary(locale);

  // ################### FETCH DATA ###################
  const product = await getProduct({ id: productId });

  return (
    <section className="section-padding">
      <div className="flex-between container flex-col gap-8 md:flex-row md:items-start">
        <Image
          width={400}
          height={600}
          src={product.image}
          alt={product.title}
          className="order-2 md:order-1"
        />
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold text-primary">{product.title}</h2>
          <div className="mt-4 flex items-center gap-4">
            <StarsRating rating={product.rating.rate} />
            <span className="text-secondary underline">
              {product.rating.count} REVIEWS
            </span>
          </div>
          <span className="text-2xl font-bold">
            {CURRENCY} {product.price}
          </span>
          <div className="my-4 border-y border-muted-foreground py-4">
            <h3 className="mb-2 text-lg font-bold">Product Detail</h3>
            <p className="text-md text-muted-foreground">
              {product.description}
            </p>
          </div>
          <AddToCartBtn
            locale={locale}
            translations={common}
            product={product}
            className="w-full"
          />

          <div className="my-4 flex items-center gap-2 border-y border-muted-foreground py-4">
            <h4 className="text-lg">Share: </h4>
            <SocialMedia />
          </div>
          <div className="bg-cardLighter p-4">30-days Free Returns</div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
