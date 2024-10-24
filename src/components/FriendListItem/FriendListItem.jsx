import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.card}>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={`${isOnline ? s.online : s.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
