import { BasicSelect } from "../select";
import Charity from "./Charity";
import { styled } from "@mui/system";

export default function Charities(props: any) {
  function handleAction() {
    props.setTakeAction(false);
  }

  return (
    <HeadingDiv>
      <Heading>MAKE A DIFFERENCE</Heading>
      <SubHeading>
        Check out the charities that support this cause and get involved!
      </SubHeading>

      <Card>
        <Buttons>
          <Back onClick={handleAction}>&#10094;</Back>
          <BasicSelect></BasicSelect>
        </Buttons>
        <CharityLayout>
          {props.charities.map((charity: any) => (
            <Charity
              img={charity.logo}
              name={charity.name}
              trust={charity.trustLevel}
              numRatings={charity.ratings}
            ></Charity>
          ))}
        </CharityLayout>
      </Card>
    </HeadingDiv>
  );
}

const HeadingDiv = styled("div")`
  text-align: center;
`;

const Heading = styled("h2")`
  font-weight: 600;
  margin: 0;
`;

const SubHeading = styled("p")`
  font-weight: 200;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Card = styled("div")`
  background-color: rgb(43, 43, 43, 0.39);
  border-radius: 16px;
`;

const Buttons = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-right: 25px;
`;

const Back = styled("button")`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 15px;
`;

const CharityLayout = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;
