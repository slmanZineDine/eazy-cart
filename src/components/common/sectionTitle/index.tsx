type TSectionTitleProps = {
  title?: string;
  mainWord?: string;
  hasSubTitle?: boolean;
  className?: string;
};

const SectionTitle = ({
  title = "",
  mainWord = "",
  hasSubTitle = false,
  className = "",
}: TSectionTitleProps) => {
  return (
    <>
      <h2 className={`mb-6 text-3xl font-bold text-secondary ${className}`}>
        {title} <span className="text-primary">{mainWord}</span>
      </h2>
      {hasSubTitle && (
        <p className="mx-auto -mt-4 max-w-96 text-center text-border">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quos
          temporibus blanditiis praesentium.
        </p>
      )}
    </>
  );
};

export default SectionTitle;
