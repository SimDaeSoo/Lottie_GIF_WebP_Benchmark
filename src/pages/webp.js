const WebpPage = () => {
  return (
    <>
      {
        new Array(28).fill(true).map((_v, i) => {
          return (
            <img
              key={i}
              alt=''
              src={"/sample.webp"}
              style={{
                width: '200px',
                height: '200px'
              }}
            />
          )
        })
      }
    </>
  );
}

export default WebpPage;