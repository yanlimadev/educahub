export default function MainContentItem({ children, className }) {
  return (
    <section className={"flex flex-row flex-wrap" + className}>
      {children}
    </section>
  );
}
