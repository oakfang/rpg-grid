import styled from "styled-components";
import { sizes, widget } from "ui/common";
import { Button } from "ui/atoms/Button";
import { LayersManager } from "ui/widgets/LayersManager";
import { GridManager } from "ui/widgets/GridManager";

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
        <GridManager />
      </Content>
    </Layout>
  );
}

const Header = styled.header`
  ${widget("primary")}
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: ${sizes.xl};
`;

const Content = styled.main`
  ${widget("neutral")}
  grid-area: canvas;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sidebar = styled.aside`
  ${widget("neutral")}
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
