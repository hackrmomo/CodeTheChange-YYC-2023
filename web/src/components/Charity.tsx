import { BasicRating } from "../select";

export default function Charity(props: any) {
  const imageSrc = props.img;
  return (
    <div>
      <img src={imageSrc} alt="Charity Logo"></img>
      <h4>{props.name}</h4>
      <BasicRating></BasicRating>
      <p>{props.numRatings} Ratings</p>
    </div>
  );
}
