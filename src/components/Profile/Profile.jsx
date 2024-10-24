import s from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.image} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.item_name}>Followers</span>
          <span className={s.item_number}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.item_name}>Views</span>
          <span className={s.item_number}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.item_name}>Likes</span>
          <span className={s.item_number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
