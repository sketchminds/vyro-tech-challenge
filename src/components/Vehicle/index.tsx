import Tag from "../Tag";
import styles from "./index.module.scss";
import { IVehicle } from "./../../interfaces/Vehicle";

export default function Vehicle(props: IVehicle) {
  const { media, name, condition, is_sold } = props;

  const vehicleConditions = {
    new: 'New',
    used: 'Second hand',
    demo: 'Dealer demo'
  };
  
  const featuredMedia = media.find(image => image.placement === 'featured');
  const featuredMediaSrc = featuredMedia?.src ?? "https://via.placeholder.com/1000x600";

  return (
    <div className={`${styles.vehicle} vehicle-card`}>
      <img className={styles.media} src={featuredMediaSrc} alt={featuredMedia?.alt} />
      
      <h2 className={styles.name}>{name}</h2>

      <Tag>{ vehicleConditions[condition] }</Tag>
      <Tag>{ is_sold ? 'Sold' : 'Available'} </Tag>
    </div>
  );
}
