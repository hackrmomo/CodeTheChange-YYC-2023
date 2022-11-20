import { BasicRating } from "../select";
import { styled } from "@mui/system";

export default function Charity(props: any) {
  const imageSrc = props.img;
  return (
    <Container>
      <Image src={imageSrc} alt="Charity Logo"></Image>
      {props.name.length > 17 ? (
        <Text>
          <Name>{props.name}</Name>
        </Text>
      ) : (
        <div>
          <Name>{props.name}</Name>
        </div>
      )}

      <BasicRating></BasicRating>
      <Ratings>({props.numRatings} Ratings)</Ratings>
    </Container>
  );
}

const Image = styled("img")`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const Container = styled("div")`
  margin: 30px;
`;

const Ratings = styled("p")`
  margin: 0px;
  font-size: 12px;
`;

const Name = styled("p")`
  margin: 0 0 5px 0;
  font-size: 15px;
`;

const Text = styled("div")`
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  transition: 0.5s;
  margin: 0 0 5px 0;
  &:hover {
    text-overflow: clip;
    overflow: visible;
    cursor: pointer;
    padding-bottom: 20px;
  }
`;
