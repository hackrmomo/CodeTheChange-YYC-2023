import React from "react";
import { styled } from "@mui/system";

// Styles
import "./PostForm.css";

// Images
import mainLogo from "./images/pfp.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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

const Wrapper = styled("div")`
    * {
        font-family: "Inter";
        font-style: normal;
        color: #fff;
        box-sizing: border-box;
    }

    .post-card {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;

        width: 669px;
        height: 821px;

        padding: 67px 78px;

        background: rgba(43, 43, 43, 0.39);
        mix-blend-mode: normal;
        border: 1px solid #1a1919;
        border-radius: 16px;
    }

    .post-card-top {
        width: 100%;
    }

    .user-info {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .user-info span {
        text-align: center;
        height: fit-content;
        top: 50%;
        padding-left: 16px;
    }

    .user-pfp {
        width: 54px;
        height: 54px;
        border-radius: 50%;
    }

    .location-info {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: fit-content;
    }

    .title {
        width: 514px;
        height: 44px;
        margin-bottom: 20px;
    }

    .description {
        width: 514.13px;
        height: 244px;
        left: 608px;
        top: 367px;

        margin-bottom: 20px;
        background: #454545;
    }

    textarea,
    input,
    button {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        border: none;

        outline: none;
        background: #454545;
        mix-blend-mode: normal;
        border-radius: 16px;
        padding: 10px;
    }

    .tags {
        background: #323232;
        margin-bottom: 18px;
    }

    ::placeholder {
        padding: 10px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: rgba(255, 255, 255, 0.58);
    }

    .text-input {
        width: 100%;
    }

    .file-input {
        width: 100%;
    }

    input[type="file"] {
        display: none;
    }

    .custom-file-upload {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 160px;
        height: 52px;
        cursor: pointer;
        background: #323232;
        mix-blend-mode: normal;
        border: 1px solid #1a1919;
        border-radius: 16px;
    }

    .file-upload-text {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: #ffffff;
    }

    .file-upload-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .submit-btn {
        position: absolute;
        width: 215.99px;
        height: 53px;

        bottom: 67px;
        right: 78px;

        background: #b8124d;
        mix-blend-mode: normal;
        border-radius: 16px;
    }
`;

export default NewPost;
