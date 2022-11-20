import BasicSelect from "./select";
import Charity from "./Charity";
import styled from "@mui/system";

export default function Charities(props: any) {
  return (
    <div>
      <h2>MAKE A DIFFERENCE</h2>
      <h4>Check out the charities that support this cause and get involved!</h4>
      <div>
        <button>&#8592;Back</button>
        <BasicSelect></BasicSelect>
        {props.charities.map((charity: any) => (
          <Charity
            img={charity.logo}
            name={charity.name}
            trust={charity.trustLevel}
            numRatings={charity.ratings}
          ></Charity>
        ))}
      </div>
    </div>
  );
}
