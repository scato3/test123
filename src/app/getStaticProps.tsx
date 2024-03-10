export async function getStaticProps() {
  const response = await fetch("http://52.78.127.145:8081/api/main/");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
