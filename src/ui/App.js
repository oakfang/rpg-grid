import styled from "styled-components";
import { primaryWidget, neutralWidget, sizes } from "ui/common";
import { Button } from "ui/atoms/Button";
import { LayersManager } from "ui/widgets/LayersManager";

export function App() {
  return (
    <Layout>
      <Header>
        <h1>RPG Grid</h1>
        <Button $variant="cta">New Grid</Button>
      </Header>
      <Sidebar>
        <LayersManager />
      </Sidebar>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, urna eu tincidunt consectetur,
        </p>
      </Content>
    </Layout>
  );
}

const Header = styled.header`
  ${primaryWidget}
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: ${sizes.xl};
`;

const Content = styled.main`
  ${neutralWidget}
  grid-area: canvas;
`;

const Sidebar = styled.aside`
  ${neutralWidget}
  grid-area: sidebar;
  padding: ${sizes.sm};
`;

const Layout = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "header"
    "sidebar"
    "canvas";
  grid-template-columns: 1fr 400px;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "header header"
    "canvas sidebar";
`;
