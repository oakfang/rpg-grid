import styled from "styled-components";
import { sizes, widget, scroller } from "ui/common";
import { LayersManager } from "ui/widgets/LayersManager";
import { GridManager } from "ui/widgets/GridManager";
import { Toolbar } from "ui/widgets/Toolbar";

export function App() {
  return (
    <Layout>
      <Header>
        <Toolbar />
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
  padding: ${sizes.xxl};
  grid-area: canvas;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  ${scroller}
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
