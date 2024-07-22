import Logo from "@/components/svg/Logo";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ROUTER = [
  { name: "티토챗", path: "/chat" },
  { name: "행운카드", path: "/fortune" },
  { name: "고객센터", path: "/cs" },
];

const Header = () => {
  const router = useRouter();
  return (
    <Container>
      <div
        style={{
          maxWidth: "1280px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo
          onClick={() => {
            router.push("/");
          }}
        />
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {ROUTER.map((item, index) => (
            <NavItem key={index} href={item.path}>
              {item.name}
            </NavItem>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 96px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px 16px;
  background-color: white;
  z-index: 100;
`;

const NavItem = styled(Link)`
  color: #505050;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0094ff;
  }
`;
