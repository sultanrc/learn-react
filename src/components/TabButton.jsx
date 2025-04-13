export default function TabButton({ children, onSelect, onActive }) {
  return (
    <li>
      <button className={onActive ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
