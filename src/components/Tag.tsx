const Tag = (props: { name: string; popular: number }) => {
  const { name, popular } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{popular}</p>
    </div>
  );
};
export default Tag;
