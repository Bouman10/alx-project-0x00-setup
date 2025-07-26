interface UserCardProps {
  name: string;
  email: string;
  isPremium: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, isPremium }) => {
  return (
    <div className="card text-left">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm">{email}</p>
      <p className="text-sm text-green-600 font-semibold">
        {isPremium ? "Premium User" : "Free User"}
      </p>
    </div>
  );
};

export default UserCard;
