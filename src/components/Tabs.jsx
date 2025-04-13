export default function Tabs({ children, buttons, ContainerName = "menu" }) {
  // const ContainerName = containerName
  return (
    <>
      <ContainerName>{buttons}</ContainerName>
      {children}
    </>
  ); //buttons bisa diisi denga jsx, coba cek Examples.jsx
}
