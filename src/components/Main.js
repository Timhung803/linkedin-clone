import styled from "styled-components";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";

const Main = (props) => {
  return (
    <Container>
      <ShareBox>
        Share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <HiOutlinePhotograph style={{ color: "#378fe9" }} size={24} />
            <span>Photo</span>
          </button>
          <button>
            <FaPhotoVideo style={{ color: "#5f9b41" }} size={24} />
            <span>Video</span>
          </button>
          <button>
            <HiOutlinePhotograph style={{ color: "#c37d16" }} size={24} />
            <span>Event</span>
          </button>
          <button>
            <MdOutlineArticle style={{ color: "#e16745" }} size={24} />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0/15%), 0 0 0 rgb(0 0 0/20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: withe;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 4px;
      button {
        svg {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
export default Main;
