import styled from "styled-components";
import CategorySelector from "../components/CategorySelector";
import PostList from "../components/PostList";
import WriteButton from "../components/WriteButton";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 22px;
  margin: 34px auto 20px 30px;
  color: #222222;
`;

const ListPage: React.FC = () => {
  return (
    <Page>
      <Title>커뮤니티</Title>
      <CategorySelector />
      <PostList />
      <WriteButton />
    </Page>
  );
};

export default ListPage;
