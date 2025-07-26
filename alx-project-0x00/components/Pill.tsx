interface PillProps {
  label: string;
}

const Pill: React.FC<PillProps> = ({ label }) => {
  return (
    <span className="pill">
      {label}
    </span>
  );
};

export default Pill;
