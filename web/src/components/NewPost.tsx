import React from "react";

// Images
import mainLogo from "../images/pfp.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Wrapper } from "./NewPost.styles";

type Props = {
    callback: any;
};

const NewPost: React.FC<Props> = ({ callback }) => (
    <Wrapper>
        <div className="post-card-top">
            <div className="user-info">
                <img className="user-pfp" src={mainLogo} alt="pfp2" />
                <span>@SewerRat</span>
            </div>

            <div className="location-info">
                <LocationOnIcon />
                <span>Enter Location</span>
            </div>
        </div>

        <input className="title text-input" type="text" name="title" id="" placeholder="title" />
        <textarea className="description text-input" name="description" id="" placeholder="description"></textarea>

        <input className="tags text-input" type="text" name="tags" id="" placeholder="tags" />

        <div className="file-upload-container">
            <label htmlFor="file-upload" className="custom-file-upload">
                <span className="file-upload-text">Add Media</span>
            </label>
            <input id="file-upload" type="file" />
        </div>

        <input className="submit-btn" type="submit" value="Spread Awareness" onClick={callback} />
    </Wrapper>
);


export default NewPost;
