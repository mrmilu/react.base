import BasePageStyled from "@/src/ui/features/misc/components/base_page.styled";

export default function ComponentsShowcasePage() {
  return (
    <BasePageStyled.Wrapper data-cy="users-page">
      <h2>Components showcase</h2>
      <p>These components are frequent in many apps. This page shows how to implement them and which libraries to use for each of them.</p>
    </BasePageStyled.Wrapper>
  );
}
