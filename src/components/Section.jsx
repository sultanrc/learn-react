export default function Section({ title, children, ...props }) {
  return (
    // ...props itu hanya untuk built-in attributes
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
