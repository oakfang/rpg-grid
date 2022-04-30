import styled from "styled-components";

export function LayerAssets({ layer }) {
  if (!layer.assets.length) {
    return <EmptyState>No assets yet!</EmptyState>;
  }

  return null;
}

const EmptyState = styled.p`
  text-align: center;
  font-style: italic;
`;
