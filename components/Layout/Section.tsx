type SectionProps = {
  className?: string;
  id?: string;
  customMargin?: string;
  children?: React.ReactNode;
};

const Section = ({
  className = "",
  id,
  children,
  customMargin,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`relative ${
        customMargin || "pb-[3.125rem] lg:pb-[3.75rem]"
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
