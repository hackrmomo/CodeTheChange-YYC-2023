import { BasicSelect, TextButtons } from "./select";
import Charity from "./Charity";
import { styled } from "@mui/system";

export default function Charities(props: any) {
  console.log("hello");
  return (
    <HeadingDiv>
      <Heading>MAKE A DIFFERENCE</Heading>
      <SubHeading>
        Check out the charities that support this cause and get involved!
      </SubHeading>

      <Card>
        <Buttons>
          <TextButtons></TextButtons>
          <BasicSelect></BasicSelect>
        </Buttons>
        {props.charities.map((charity: any) => (
          <Charity
            img={charity.logo}
            name={charity.name}
            trust={charity.trustLevel}
            numRatings={charity.ratings}
          ></Charity>
        ))}
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
  font-weight: 500;
  margin: 0;
`;

const Card = styled("div")`
  background-color: rgb(43, 43, 43, 0.39);
  border-radius: 16px;
`;

const Buttons = styled("div")`
  display: flex;
  flex-direction: row;
`;
