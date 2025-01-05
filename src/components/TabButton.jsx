export default function TabButton({children, isSelected, ...extraProps}) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...extraProps}>
        {children}
      </button>
    </li>
  );
}
