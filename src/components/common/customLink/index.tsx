"use client";

// Next
import Link, { LinkProps } from "next/link";
// React
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";

type TCustomLinkProps = LinkProps & {
   children: React.ReactNode;
   href: string;
   target?: string;
} & HTMLAttributes<HTMLAnchorElement>;

/** ----------------------------------------------
 * CustomLink component that conditionally prefetches the linked route based on user interaction.
 *  @param children - The content to be displayed within the link.
 *  @param href - The URL the link points to.
 *  @param rest - Additional HTML attributes to be passed to the link element.
 *  @returns A Next.js Link component with conditional prefetching.
 ---------------------------------------------- */
const CustomLink = ({ children, href, ...rest }: TCustomLinkProps) => {
   // ################### REDUX HOOKS ###################
   const linkRef = useRef<HTMLAnchorElement>(null);
   const [prefetching, setPrefetching] = useState(false);

   // ################### HANDLER ###################
   const setPrefetchListener = () => setPrefetching(true);
   const removePrefetchListener = () => setPrefetching(false);

   // ################### SIDE EFFECT ###################
   useEffect(() => {
      const linkElement = linkRef.current;
      linkElement?.addEventListener("mouseover", setPrefetchListener);
      linkElement?.addEventListener("mouseleave", removePrefetchListener);
      return () => {
         linkElement?.removeEventListener("mouseover", setPrefetchListener);
         linkElement?.removeEventListener("mouseleave", removePrefetchListener);
      };
   }, []);

   return (
      <Link href={href} ref={linkRef} prefetch={prefetching} {...rest}>
         {children}
      </Link>
   );
};

export default CustomLink;
