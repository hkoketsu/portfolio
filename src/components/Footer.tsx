import styled from "@emotion/styled";
import { Link } from "gatsby";

const Footer: React.FC = () => (
  <footer id="footer">
    <PageTop>
      <Link to='#header'>
        Page Top
      </Link>
    </PageTop>
  </footer>
)

export default Footer;

const PageTop = styled.div`
  font-size: 12px;
  font-weight: bold;
  display: block;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #ccc;
`