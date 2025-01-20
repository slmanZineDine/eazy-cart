type TSectionTitleProps = {
  title?: string;
  mainWord?: string;
  hasSubTitle?: boolean;
  subTitle?: string;
  className?: string;
};

const SectionTitle = ({
  title = "",
  mainWord = "",
  hasSubTitle = false,
  subTitle = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quos temporibus blanditiis praesentium.",
  className = "",
}: TSectionTitleProps) => {
  return (
    <>
      <h2 className={`mb-6 text-3xl font-bold text-secondary ${className}`}>
        {title} <span className="text-primary">{mainWord}</span>
      </h2>
      {hasSubTitle && (
        <p className="mx-auto -mt-4 max-w-96 text-center text-muted-foreground">
          {subTitle}
        </p>
      )}
    </>
  );
};

export default SectionTitle;
