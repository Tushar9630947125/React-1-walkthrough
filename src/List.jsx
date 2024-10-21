function List(props) {
  const ListItems = props.listItems.map((item) => <li key={item}>{item}</li>);

  return <ul> {ListItems}</ul>;
    // return (
    //   <ul>
    //     {props.listItems.map((item,index) => (
    //       <li key={index}>{item}</li>
    //     ))}
    //   </ul>
    // );
}
export default List;
