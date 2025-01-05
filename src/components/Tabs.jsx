export default function Tabs({
  children,
  childrenButtons,
  childrenButtonsContainer = "menu",
}) {
  const TabsContainer = childrenButtonsContainer;

  return (
    <>
      <TabsContainer>{childrenButtons} </TabsContainer>
      {children}
    </>
  );
}
